"use client";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import { useEffect, useState } from "react";

const PostList = ({isPosting, onStopPosting}) => {
    const[posts, setPosts]= useState([])

    useEffect(() => {
        async function loadPosts() {
            const response = await fetch("/api/posts");
            const data = await response.json();

            setPosts(data.posts);
        }

        loadPosts();
    }, []);

    function addPostHandler(postData){
        setPosts((prevPosts)=>[postData, ...prevPosts])
    }
    
    return (
        <>
        {isPosting && (
        <Modal onClose={onStopPosting}> 
             <NewPost onAddPost={addPostHandler} onCancel={onStopPosting}/>
        </Modal>
        )}
        {posts.length > 0 &&(
            <ul className="flex flex-wrap justify-center gap-10 mt-10">
                {
                    posts.map((post)=> <Post key={post.id} author={post.author} body={post.body} /> )
                }   
            </ul>
            )}
        {posts.length ===0 &&(
            <div className="text-center text-white">
                <h2>
                    There Are No Post Yet
                </h2>
                <p>Start Adding Some!</p>
            </div>
        )}
        </>
    );
}

export default PostList;

"use client";
import PostList from "./PostList";
import MainHeader from "./MainHeader";
import { useState } from "react";

const App = () => {
    const[modalIsVisible, setModalIsVisible]= useState(false)
        function hideModalHandler(){
            setModalIsVisible(false)
        }
        function showModalHandler(){
            setModalIsVisible(true)
        }
    return (
        <>
        <MainHeader createPost={showModalHandler} />
        <main>
            <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
        </main>
        </>
    );
}

export default App;
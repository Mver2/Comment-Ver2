"use client";
import { useState } from "react";
const NewPost = ({onCancel, onAddPost}) => {
        
    const[enteredBody, setEnteredBody] = useState("")
    const[enteredAuthor, setEnteredAuthor] = useState("")


    function changeBodyHandler(e){
    setEnteredBody(e.target.value);
    }
    function changeAuthorHandler(e){
    setEnteredAuthor(e.target.value);
    }
async function submitHandler(e) {
  e.preventDefault();

  const postData = {
    body: enteredBody,
    author: enteredAuthor,
  };

  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  onAddPost(data.post);
  onCancel();
}
    return (
        <form onSubmit={submitHandler} className="bg-fuchsia-900 rounded-md w-full p-6 flex flex-col justify-center mx-auto">
            <p className="mb-5">
                <label className="mb-2 block text-white font-bold" htmlFor="body">Text</label>
                <textarea onChange={changeBodyHandler} className="w-full resize-none rounded-lg border-indigo-400 bg-violet-200 p-3 text-gray-900 outline-none focus:border-violet-200 focus:ring-2 focus:ring-cyan-400" name="text" id="body" required rows={3}></textarea>
            </p>
            <p>
                <label className="mb-2 block font-bold text-white" htmlFor="name">Your Name</label>
                <input onChange={changeAuthorHandler} className="w-full rounded-lg bg-violet-200 p-2 text-gray-900 outline-none focus:ring-2 focus:ring-cyan-400" type="text" id="name" required minLength={3}/>
            </p>
            <p className="mt-4 justify-end gap-4 items-center flex">
                <button type="button" onClick={onCancel} className="bg-fuchsia-700 py-1.5 px-3 rounded-lg">Cancel</button>
                <button className="bg-blue-700 py-1.5 px-3 rounded-lg">Submit</button>
            </p>
        </form>
    );
}

export default NewPost;

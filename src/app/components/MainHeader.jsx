"use client";
import { MdPostAdd, MdMessage } from "react-icons/md";
const MainHeader = ({createPost}) => {

    return (
        <header className="mx-auto items-center max-w-5xl flex justify-between py-10 border-b-blue-100 border-b-2">
            <h1 className="text-3xl text-white flex gap-3 items-center">
                <MdMessage size={50}/>
                Mver2 Comment
            </h1>
            <p>
                <button className=" rounded-md font-semibold bg-blue-600 items-center text-sm text-center px-3 flex gap-1 py-1.5 " onClick={createPost}>
                    <MdPostAdd size={18}/>
                    New Post
                </button>
            </p>
        </header>
    );
}

export default MainHeader;

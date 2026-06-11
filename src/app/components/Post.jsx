
const Post = (props) => {
    return (
        <div className="w-60 rounded-lg bg-blue-300 px-6 py-5 shadow-md ease-out animate-[post-enter_1000ms_ease-out]">
            <p className="mb-3 text-center text-sm font-bold uppercase tracking-widest text-blue-900">{props.author}</p>
            <p className="text-lg text-center font-light text-blue-700">{props.body}</p>
        </div>
    );
}

export default Post;
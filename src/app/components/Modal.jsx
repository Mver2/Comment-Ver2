"use client"

const Modal = ({children, onClose}) => {
    return (
        <>
        <div onClick={onClose} className="fixed flex top-0 left-0 w-full h-screen bg-black/50 items-start justify-center"/>
        <dialog open className="fixed left-1/2 top-1/2 m-0 w-[360px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-md border-0 p-0 shadow-md overflow-hidden">{children}</dialog>
        </>
    );
}

export default Modal;

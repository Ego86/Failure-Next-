import { ReactNode } from "react"

const Modal = ({children, className}: {children?: ReactNode, className?: string}) => {
return (
    <>
    <div className={`absolute top-0 left-0 z-[5] bg-[#4b49499c] w-screen h-screen`}></div>
        <div className={`fixed left-0 overflow-hidden z-10 w-full h-full flex justify-center items-center ${className}`}>
            {children}
        </div>
    </>
)
}

export default Modal
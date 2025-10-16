import { ReactNode } from "react"

const Modal = ({children}: {children?: ReactNode}) => {
return (
    <>
    <div className="absolute top-0 left-0 z-[5] bg-[#4b49499c] w-screen h-screen"></div>
        <div className="fixed z-10 w-full h-full flex justify-center items-center">
            {children}
        </div>
    </>
)
}

export default Modal
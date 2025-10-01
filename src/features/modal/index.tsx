import { ReactNode } from "react"

const Modal = ({children}: {children?: ReactNode}) => {
return (
    <div className="fixed z-10 top-2/4 right-2/4">
        {children}
    </div>
)
}

export default Modal
import { FC, HTMLProps, ReactNode } from "react"

interface Main extends HTMLProps<HTMLDivElement> {
    children?: ReactNode
}


const Main: FC<Main> = ({children, className}) => {
return (
    <main className={`${className}  overflow-hidden h-full px-5 py-4 dark:bg-[#242424c9]  bg-[#ffeed2] rounded-lg`}>{children}</main>
)
}

export default Main
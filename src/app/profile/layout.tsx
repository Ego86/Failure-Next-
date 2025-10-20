import { Metadata } from "next"

export const generateMetadata  = async (): Promise<Metadata> => {
return {
    title: "name",
    description: "Далеко-далеко за словесными горами в стране.",
    assets: "/public/1625514962_30-kartinkin-com-p-sad-izyashchnikh-slov-anime-anime-krasivo-30.jpg"
}
}

const Layout = ({children, createpost}) => {
return (<>{children}{createpost}</>)
}

export default Layout
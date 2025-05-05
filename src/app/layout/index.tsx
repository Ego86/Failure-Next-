import { SideBar } from "@/shared/ui/sidebar";
import Header from "@/widgets/header";
import { ReactNode } from "react";

const Layout = ({ children, isAuth }: {isAuth?: boolean, children: ReactNode}) => {
  return (
    <>
      {isAuth && <Header />}
      {isAuth && <SideBar />}
      {children}
    </>
  );
};

export default Layout;

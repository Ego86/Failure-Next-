"use client"

import useWindowSize from "@/shared/hook/useWindowSize";
import { SideBar } from "@/shared/ui/sidebar";
import TabBarMobile from "@/shared/ui/tabBarMobile/tabBarMobile";
import Header from "@/widgets/header";
import { ReactNode } from "react";

const Layout = ({ children, isAuth }: {isAuth?: boolean, children: ReactNode}) => {
  const [width] = useWindowSize()
  return (
    <>
      {isAuth && 
      <>
      <Header />
      {width > 1000 ? <SideBar /> : <TabBarMobile/>}
      </>
      }
      {children}
    </>
  );
};

export default Layout;

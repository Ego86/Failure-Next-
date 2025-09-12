import {Aside} from "@/shared/ui/aside";
import TabBarMobile from "@/shared/ui/tabBarMobile/tabBarMobile";
import { ReactNode } from "react";

const Layout = ({ children, isAuth }: {isAuth?: boolean, children: ReactNode}) => {

 
    return (
    <>
      {isAuth && <>
        <Aside className="md:!flex !hidden" />
        <TabBarMobile className="md:hidden block" />
      </> }
      {children}
          </>
  );

};

export default Layout;

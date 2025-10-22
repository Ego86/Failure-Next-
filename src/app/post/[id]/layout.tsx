"use server" 

import { Metadata } from "next";
import { data } from "../../../shared/constants/post/constant";


export const generateMetadata = async ({}): Promise<Metadata> => {
  return {
    title: data.postData.title,
    description: data.postData.text,
    assets: data.postData.images,
  };
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;

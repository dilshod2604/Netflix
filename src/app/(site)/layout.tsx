import HomeLayout from "@/components/Layout/Layout";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <HomeLayout>{children}</HomeLayout>;
};

export default Layout;

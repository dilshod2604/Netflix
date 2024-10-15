import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;

import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  const session = getServerSession();
  if (!session) {
    redirect("/auth/login");
  } else {
    return (
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    );
  }
};

export default HomeLayout;

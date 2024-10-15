import Header from "@/components/Layout/Header";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <main className="w-screen h-screen flex items-center justify-center">
        {children}
      </main>
    </div>
  );
};

export default layout;

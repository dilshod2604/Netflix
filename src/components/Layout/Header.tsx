"use client";
import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import NavBar from "../ui/NavBar";
import ProfileButton from "../ui/ProfileButton";
import { signOut, useSession } from "next-auth/react";
const Header = () => {
  const { data: session } = useSession();
  return (
    <header>
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-x-4">
            <Image src={""} alt="" />
            <NavBar />
          </div>
          <div className="flex items-center gap-x-4">
            <IoSearch size={25} className="text-black cursor-pointer" />
            <FaBell
              onClick={() => signOut()}
              size={25}
              className="text-black cursor-pointer"
            />
            {session && <ProfileButton />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { signIn } from "next-auth/react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const FastSignIn = () => {
  return (
    <div className="w-full flex items-center gap-x-4 justify-center">
      <FaGithub
        onClick={() => signIn("github")}
        size={35}
        className="text-black hover:opacity-75 transition"
      />
      <FcGoogle
        size={35}
        onClick={() => signIn("google")}
        className=" hover:opacity-75 transition"
      />
    </div>
  );
};

export default FastSignIn;

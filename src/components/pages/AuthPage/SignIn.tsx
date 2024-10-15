"use client";
import FastSignIn from "@/components/ui/FastSignIn";
import Link from "next/link";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
interface IInputValue {
  email: string;
}
const SignIn = () => {
  const { register, handleSubmit } = useForm<IInputValue>();
  const onSubmit: SubmitHandler<IInputValue> = (IInputValue) => {};
  return (
    <section>
      <div className="container">
        <div className="flex flex-col px-5 py-5 rounded-xl bg-teal-400 gap-y-5">
          <h1 className="text-white font-bold text-3xl text-center">Login</h1>
          <form className="flex flex-col gap-y-4">
            <input
              type="email"
              className="bg-white text-neutral-700 placeholder:text-neutral-400 focus:outline-none rounded-md px-3 py-2"
              placeholder="email"
              {...register("email", { required: true })}
            />
            <button
              type="submit"
              className="bg-white text-neutral-900 font-bold px-5 py-2 rounded-md hover:opacity-75 transition"
            >
              Login
            </button>
          </form>
          <FastSignIn />
          <div className="flex items-center py-4 border-t border-neutral-400 gap-x-2">
            <p className="text-neutral-600 font-normal ">
              If you have not account
            </p>
            <Link
              href="/auth/sign_up"
              className="text-white font-normal hover:underline hover:opacity-75 transition"
            >
              Sign-up free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;

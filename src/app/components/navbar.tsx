import React from "react";
import Link from "next/link";
import { Dropdown } from "./dropdown";

export const Navbar = () => {
  return (
    <main className="text-white flex justify-around items-center py-5 ">
      <h1 className="font-bold text-3xl shadowfont w-full ml-10">CryptoWave</h1>
      <div className="flex justify-end sm:justify-center mr-10 sm:mr-0 w-full coolfont font-bold items-center gap-6 lg:gap-10 ">
        <div className="md:hidden">
          <Dropdown />
        </div>

        <section className="hidden md:flex gap-6 lg:gap-10 ">
          <Link href="#page5" className="">
            About
          </Link>
          <Link href="#page2" className="">
            Features
          </Link>
          <Link href="#page4"> Services </Link>
          <Link href="#page3">Pricing </Link>
          <Link href="#page6">Contacts </Link>
        </section>

        <div className="hidden sm:flex gap-6 lg:gap-10 ">
          <Link href="login" className="bg-red-700 px-6 py-2 rounded-md">
            Login
          </Link>
          <Link href="register" className="bg-red-700 py-2 px-6 rounded-md">
            Register
          </Link>
        </div>
      </div>
    </main>
  );
};

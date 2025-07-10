"use client";
import React, { useState } from "react";
import { Comfortaa } from "next/font/google";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";



const Header = () => {
    const path = usePathname();
  const [show, setShow] = useState(false);

  const toggleMenu = () => setShow((prev) => !prev);

  return (
    <header className={`fixed z-50 w-full bg-pink-700 text-black ${show &&"overflow-y-hidden"}`}>
      
      <div className="flex tex justify-between items-center px-6 py-6 md:px-12 lg:px-24">
       <Link href="/">
        <h1 className= "text-2xl font-roboto font-bold">
          FunVerge
        </h1>
       </Link>
       

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          <Link className={`hover:bg-pink-400 hover: px-2 hover: rounded hover:py-1 hover:text-white {path.startsWith("/about") ? "active" : ""}` }href="/about">About Us</Link>
          <Link className={` hover:bg-pink-400 hover: px-2 hover: rounded hover:py-1 hover:text-white{path.startsWith("/contact") ? "active" : ""}`} href="/contact">Contact Us</Link>
          <Link className={` hover:bg-pink-400 hover: px-2 hover: rounded hover:py-1 hover:text-white{path.startsWith("/hotels") ? "active" : ""}`} href="/hotels">Hotels</Link>
          <Link className={` hover:bg-pink-400 hover: px-2 hover: rounded hover:py-1 hover:text-white{path.startsWith("/activities") ? "active" : ""}`} href="/activities">Activities</Link>
          <Link className={` hover:bg-pink-400 hover: px-2 hover: rounded hover:py-1 hover:text-white{path.startsWith("/login") ? "active" : ""}`} href="/login">Login</Link>
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {show ? (
            <FaTimes className="text-2xl cursor-pointer" />
          ) : (
            <RxHamburgerMenu className="text-2xl cursor-pointer" />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-pink-700 ${
          show ? "max-h-screen py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col h-screen space-y-10 py-12 gap-6 items-center">
          <Link className={`{path.startsWith("/about") ? "active" : ""}`} href="/about" >About Us</Link>
          <Link className={`{path.startsWith("/contact") ? "active" : ""}`} href="/contact">Contact Us</Link>
          <Link className={`{path.startsWith("/hotels") ? "active" : ""}`} href="/hotels" >Hotels</Link>
          <Link className={`{path.startsWith("/activities") ? "active" : ""}`} href="/activities" >Activities</Link>
          <Link className={`{path.startsWith("/login") ? "active" : ""}`} href="/login">Login</Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;

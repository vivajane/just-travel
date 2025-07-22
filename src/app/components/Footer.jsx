import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gray-100 pb-12 pt-4 px-4 sm:px-8 md:px-16 lg:px-24">
    <div className="md:flex justify-between  gap-8 py-10">
      <div>
       <Link href="/">
        <h1 className= "text-2xl font-roboto font-bold">
          FunVerge
        </h1>
       </Link>
        <p className="py-2">9 Chinese Road, 6th Floor, Lekki Phase 1, Lagos</p>
        <p>Lagos State</p>
      </div>
      <div>
        <h1 className="text-md py-2 font-bold">Discover</h1>
        <ul className="py-2 space-y-2">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/activities">Activities</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-md py-2 font-bold">Support</h1>
        <ul className="py-2 space-y-2">
          <li>
            <a href="https://wa.me/+2348116070090">Whatsapp</a>
          </li>
          <li>
            <a href="mailto:funverge@gmail.com"></a>
          </li>Email
        </ul>
      </div>
      <div>
        <h1 className="text-md py-2 font-bold">Legal</h1>
        <ul className="py-2 space-y-2">
          <li>
            <Link href="/policies">Privacy Policies</Link>
          </li>
          <li>
            <Link href="/terms">Terms & Conditions</Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="md:text-center">
        <p className="md:text-sm text-xs">Copyright © 2025 FunVerge All Rights Reserved. v1.30.2</p>
    </div>
    </div>
  );
};

export default Footer;

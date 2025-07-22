"use client"
import React from "react";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SuccessPage = () => {
    const router = useRouter();
    const goBack = () => router.push("/");

  return (
    <div className="md:pt-30 pb-20 rounded bg-pink-300 pt-10">
      <div className="  py-10 space-y-2 w-1/4 mx-auto text-center">
      <div onClick={goBack} className="flex justify-center">
        <FaTimes size={20}/>
      </div>
        <h1 className="text-green-600 text-2xl">Payment Successful!</h1>
        <p>Thank you for your purchase.</p>
      </div>
    </div>
  );
};

export default SuccessPage;

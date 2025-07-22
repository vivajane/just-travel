"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Activities = (props) => {
  const [index, setIndex] = useState(0);

  return (
    <Link href={`/activity/${props.slug}`}>
      <div className="w-full max-w-sm mx-auto cursor-pointer text-center rounded-2xl px-6 py-8 hover:scale-105 duration-200 hover:shadow-xl shadow-md transition-all bg-white">
        <h1 className="text-lg font-bold mt-2">
          {props.name} <span className="text-pink-700">({props.duration})</span>
        </h1>

        <h1 className="text-lg font-bold my-4 py-2 inline-flex px-6 rounded-md bg-pink-700 text-white">
          ₦{props.price}
        </h1>

        <div
          className="relative w-full aspect-[4/3] mt-4"
          onMouseEnter={() => setIndex(1)}
          onMouseLeave={() => setIndex(0)}
        >
          <Image
            src={props.images[index]}
            alt={props.name}
            fill
            className="object-cover rounded-md"
            // sizes="(max-width: 768px) 100vw, 300px"
            priority
          />
        </div>

        <div className="mt-6 py-2 px-6 rounded-md border border-pink-700 text-pink-700 font-semibold">
          Buy Ticket
        </div>
      </div>
    </Link>
  );
};

export default Activities;

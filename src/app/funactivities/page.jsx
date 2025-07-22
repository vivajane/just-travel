"use client";
import React, { useContext, useState } from "react";
import FunParkedActivities from "../components/FunParkedActivities";
import { ContextActivity } from "../components/Context";

const FunActivities = () => {
  const [search, setSearch] = useState("");
  const { activities } = useContext(ContextActivity);

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const filteredSearch = activities?.filter((activity) =>
    activity?.name?.toLowerCase().includes(search?.toLowerCase())
  );

  return (
    <div className="py-20 md:py-20 ">
      <div className="px-6 sm:px-12 md:px-16 lg:px-24">
        <h1 className="md:text-2xl sm:text-xl text-lg font-bold text-center py-4">
          Don't miss out on the fun
        </h1>
        <input
          onChange={onChangeHandler}
          value={search}
          className="border placeholder:text-pink-700 flex justify-center items-center mx-auto border-black py-2 rounded-full w-1/2"
          placeholder="    Search..."
          type="search"
          name=""
          id=""
        />
      </div>
      <FunParkedActivities filteredSearch={filteredSearch} />
    </div>
  );
};

export default FunActivities;

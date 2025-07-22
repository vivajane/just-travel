"use client";
import React, { useContext, useState } from 'react';
import { ContextActivity } from './Context';
import Activities from './Activities';
import Loading from './Loading';

const FunParkedActivities = ({filteredSearch}) => {
  const [show, setShow] = useState(false);
  const {loading, activities } = useContext(ContextActivity);

  const toggleButton = () => setShow((prev) => !prev);
  const source = filteredSearch ?? activities;
  const filteredActivities = !show ? source?.slice(0, 6) : source;

 if(loading === true) return <Loading />

  return (
    <div className="py-10 md:py-10 px-4 sm:px-8 md:px-16 lg:px-24">
      <h1 data-aos="fade-up" className="md:text-3xl text-2xl text-center font-bold">
        Fun Parked Activities
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-6 md:py-10">
        {filteredActivities?.map((activity) => (
          <Activities key={activity.id} {...activity} />
        ))}
      </div>

      <div className="flex justify-center">
        <button
          onClick={toggleButton}
          className="text-pink-700 cursor-pointer border px-4 py-2 rounded font-bold hover:bg-pink-100 transition"
        >
          {show ? "Show Less" : "Show All Activities"}
        </button>
      </div>
    
    </div>
  );
};

export default FunParkedActivities;

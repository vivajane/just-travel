"use client";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { ContextActivity } from "./Context";
import Activities from "./Activities";

const TopRated = () => {
  const [tops, setTops] = useState([]);
  const { activities } = useContext(ContextActivity);

  useEffect(() => {
    if (activities.length > 0) {
      let activitiesCopy = activities.slice();
      activitiesCopy = activitiesCopy.filter((item) => item.topRated === true);
      setTops(activitiesCopy.slice(0, 3));
    }
  }, [activities]);

  return (
    <div className="py-20 md:py-10 px-4 sm:px-8 md:px-16 lg:px-24">
        <h2 data-aos="fade-right"
          className="text-2xl md:text-4xl font-bold text-red-700 mb-4 font-comforaa text-center">Top Rated</h2>
      <div
        className=" grid gap-8 
    sm:grid-cols-2 lg:grid-cols-3"
      >
        {tops.map((top) => (
          <div key={top.id}>
            <Activities {...top} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRated;

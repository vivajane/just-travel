"use client";
import { createContext, useState, useEffect } from "react";
import { activities } from "../../../data/activities";


export const ContextActivity = createContext(null);
const Context = (props) => {
  const [showActivity, setShowActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const showData = async () => {
      try {
        const response = await fetch("/api/activities");
        const data = await response.json();
        setShowActivity(data);
        setLoading(false);
      } catch (error) {
        console.log(error, "error");
      }
    };
    showData();
  }, []);
  console.log(showActivity, "to see activity");

  const contextValue = {
    activities: showActivity,
    loading
  };
  return (
    <ContextActivity.Provider value={contextValue}>
      {props.children}
    </ContextActivity.Provider>
  );
};

export default Context;

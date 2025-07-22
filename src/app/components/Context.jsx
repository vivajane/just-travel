"use client";
import { createContext, useState, useEffect } from "react";
import { activities } from "../../../data/activities";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../config/firebase.Config";

export const ContextActivity = createContext(null);
const Context = (props) => {
  const [showActivity, setShowActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [added, setAdded] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("added");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    const onSuscribe = onAuthStateChanged(auth, (user) => {
      setIsAuth(!!user);
    });
    return () => onSuscribe();
  }, []);

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
    loading,
    search,
    setSearch,
    isAuth,
    setIsAuth,
    added,
    setAdded,
  };
  return (
    <ContextActivity.Provider value={contextValue}>
      {props.children}
    </ContextActivity.Provider>
  );
};

export default Context;

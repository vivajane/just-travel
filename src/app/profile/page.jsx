"use client";
import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const seeProfile = JSON.parse(localStorage.getItem("item"));
    setProfile(seeProfile);
  }, []);
  if(!profile){
    return <p>
      Loading...
    </p>
  
  }

  return (
    <div className="pt-30 px-6 sm:px-12 md:px-22">
      <h1 className="text-2xl">Welcome, <span className="font-bold">{profile.userName}</span></h1>
    </div>
  );
};

export default ProfilePage;

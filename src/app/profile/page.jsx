"use client";
import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const [profile, setProfile] = useState([]);
  const [editProfile, setEditProfile] = useState(false);


  useEffect(() => {
    const seeProfile = JSON.parse(localStorage.getItem("item"));
    setProfile(seeProfile);
  }, []);
  const onChangeHandler = (e) => {
    setEditProfile((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const OnsubmitHandler = (e) => {
    e.preventDefault();
    
    localStorage.setItem("item", JSON.stringify(editProfile));
    setProfile(editProfile);
    toast.success("Profile updated successfully");
    setEditProfile(false);
    
  };

  
  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <div className="py-30 px-6 sm:px-12 md:px-22">
      <h1 className="text-2xl">
        Welcome, <span className="font-bold">{profile.userName}</span>
      </h1>
      <div>
        <hr className="inline-flex w-40 border-b-2 bord border border-pink-700" />
      </div>

      <h1 className="md:text-2xl mt-6">CONTACT INFORMATION</h1>
      <div className="mt-2 flex ">
        <label className="pr-2" htmlFor="email">Email:</label>
        {editProfile ? (
          <input
            type="text"
            name="email"
            className="border border-pink-700"
            onChange={onChangeHandler}
            value={editProfile.email}
          />
        ) : (
          <p className="font-bold text-black">{profile.email}</p>
        )}
      </div>

      <div className="flex gap-6 pt-6">
        <div>
          <button
            onClick={() => setEditProfile(profile)}
            className="py-2 bg-black px-8 text-white hover:bg-pink-700 rounded border border-pink-700"
          >
            Edit
          </button>
        </div>
        <div>
          <button
            onClick={OnsubmitHandler}
            className="py-2 bg-black text-white px-8 hover:bg-pink-700 rounded border border-pink-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

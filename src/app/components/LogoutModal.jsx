"use client";
import React from "react";
import Logout from "../../../config/logout";
import { useRouter } from "next/navigation";

const LogoutModal = ({ setShowLog, setShowProfile }) => {
  const router = useRouter();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    Logout();
    setShowProfile(false)
    router.push("/");
  };

  const onCancel = () => {
    setShowProfile(false)
    router.push("/")
    console.log("hommmee")
  }

  return (
    <div
      className="top-0 bottom-0 fixed  right-0  left-0 bg-black inset-0 opacity-90 justify-center flex flex-col items-center'"
      
    >
      <div className=" bg-white justify-center rounded  p-4 mx-auto flex flex-col items-center">
        <div className="space-y-2">
          <h1>Are you sure you want to logout?</h1>
          <div className="flex text-center justify-between">
            <button onClick={onSubmitHandler} className="px-3 py-2 bg-red-500 rounded-md text-white" >Logout</button>
            <button onClick= {onCancel} className="px-3 py-2 bg-green-400 rounded-md text-white">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;

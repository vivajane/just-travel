"use client";
import React from "react";
import { useState } from "react";
import ProfileModal from "./ProfileModal";
import LogoutModal from "./LogoutModal";
import { useRouter } from "next/navigation";
import SafedActivities from "../savedActivities/page";

const Modals = ({ showProfile, setShowProfile }) => {
  const router = useRouter()
  const [showProf, setShowProf] = useState(false);
  const [showAct, setShowAct] = useState(false);
  const [showLog, setShowLog] = useState(false);

  const onShowProf = () => {
    setShowProfile(false)
    router.push("/profile")
    
  };
  const onSavedAct = () => {
     setShowProfile(false)
    router.push("/savedActivities")
  };
  const onHideLog = () => {
    setShowLog(false);
  };
  return (
    <div >
      <div  className="flex text-sm md:space-y-2 flex-col absolute md:top-14 md:px-3 space-y-1 px-2 py-1 md:py-2 rounded md:rounded-2xl md:right-5 right-3 top-16 bg-white">
        <div className="cursor-pointer" onClick={onShowProf}>Profile</div>
        <div className="cursor-pointer" onClick={onSavedAct}>Activities</div>
        <div className="cursor-pointer" onClick={() => setShowLog(true)}>Logout</div>
      </div>
      {showLog && <LogoutModal showLog={showLog} setShowProfile={setShowProfile} setShowLog={onHideLog} />}
    </div>
  );
};

export default Modals;

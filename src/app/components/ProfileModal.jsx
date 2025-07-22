import React from 'react'

const ProfileModal = ({showProf, setShowProfile,  setShowProf}) => {
  return (
    <div onClick={setShowProf} className="bg-black inset-0 opacity-100  top-0 bottom-0 left-0 fixed justify-center flex flex-col items-center">
      <div className="bg-white flex flex-col ">
        Profile
      </div>
    </div>
  )
}

export default ProfileModal

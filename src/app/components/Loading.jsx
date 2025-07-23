"use client";
import React from 'react'
const Loading = () => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <div className='animate-spin rounded-full h-10 w-10 border-4 border-b-pink-700 border-pink-300' />
    </div>
  );
};

export default Loading;

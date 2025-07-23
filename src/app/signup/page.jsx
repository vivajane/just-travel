"use client";
export const dynamic = 'force-dynamic';
import {React, Suspense} from 'react'
import dynamicImport from "next/dynamic";


const SignUpWrapper = dynamicImport(() => import('../components/SignUpWrapper'), {
  ssr: false,
});

const SignUpPage = () => {
  return (
    <div>
      <SignUpWrapper/>
    </div>
  )
}

export default SignUpPage


"use client"
export const dynamic = 'force-dynamic';
import {React, Suspense} from 'react'
import dynamicImport from "next/dynamic";


const LoginWrapper = dynamicImport(() => import('../components/LoginWrapper'), {
  ssr: false,
});

const LoginPage = () => {
  return (
    <div>
      <LoginWrapper/>
    </div>
  )
}

export default LoginPage

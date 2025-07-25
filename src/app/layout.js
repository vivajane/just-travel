"use client";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {Poppins } from "next/font/google";
import { Comfortaa } from "next/font/google";
import { Roboto } from "next/font/google";
import Context from "./components/Context";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const comfortaa = Comfortaa({ subsets: ["latin"], weight: ["400", "700"] , variable : "--font-comfortaa"});
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "800"], variable: "--font-poppins" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-roboto" });


export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    Aos.init({
    })
  },[])

  const hidePages = ["/login", "/signup"];
  const hiddenPages = hidePages.includes(pathname);
 

  return (
    <html lang="en">
      <body className={`${poppins.variable} ${comfortaa.variable} ${roboto.variable}  `}
        
      >
      <Context>
        {!hiddenPages && <Header/>}
        {children}
        {!hiddenPages && <Footer/>}
      </Context>
      <ToastContainer/>
      </body>
    </html>
  );
}

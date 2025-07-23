// "use client";
// import Link from "next/link";
// import React from "react";
// import { useState, useEffect } from "react";
// import Login from "../../../config/login";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
// import { useSearchParams } from "next/navigation";

// const LoginPage = () => {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const redirect = searchParams.get("redirect") || "/";

//   const onChangeHandler = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };
//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await Login(formData.email, formData.password);
//       if (response) {
//         console.log(response, "response from login");
//         router.push(redirect);
//       }
//     } catch (error) {
//       console.log(error, "error");
//     }
//   };
//   return (
//     <div className="w-full h-screen">
//       <div className="p md:flex md:h-screen r w-full font-ibm">
//         <img
//           className="md:w-1/2 bg-gradient-to-t from-black via-purple-500 to-indigo-500 h-screen hidden md:block"
//           src="https://images.pexels.com/photos/2389348/pexels-photo-2389348.jpeg"
//           alt=""
//         />
//         <form
//           onSubmit={onSubmitHandler}
//           className="w-80 md:w-1/2 shadow hidden md:block rounded-xl space-y-2 mx-auto p-8 "
//         >
//           <h1 className="text-2xl text-center font-bold">Login</h1>

//           <div>
//             <label className="text-gray-500" htmlFor="email">
//               Email
//             </label>
//             <input
//               onChange={onChangeHandler}
//               className="w-full border px-6 py-1.5 rounded-md"
//               type="email"
//               name="email"
//               id="email"
//               value={formData.email}
//             />
//           </div>
//           <div>
//             <label className="text-gray-500" htmlFor="password">
//               Password
//             </label>
//             <input
//               onChange={onChangeHandler}
//               className="w-full border px-6 py-1.5 rounded-md"
//               type="password"
//               name="password"
//               id="password"
//               value={formData.password}
//             />
//           </div>
//           <div className="py-2">
//             <button className="bg-[#0360D9] cursor-pointer text-white px-6 py-2 rounded-md">
//               Login
//             </button>
//           </div>
//           <p className="text-gray-500">
//             Don't have an account?{" "}
//             <span className="pl-2 text-[#0360D9] cursor-pointer">
//               <Link href={`/signup?redirect=${redirect}`}>Sign Up</Link>
//             </span>
//           </p>
//         </form>
//       </div>
//       <div className="w-80 md:hidden flex flex-col my-44 mx-auto justify-between items-center">
//         <form
//           onSubmit={onSubmitHandler}
//           className=" shadow rounded-xl space-y-2 mx-auto p-8 "
//         >
//           <h1 className="text-2xl text-center font-bold">Login</h1>

//           <div>
//             <label className="text-gray-500" htmlFor="email">
//               Email
//             </label>
//             <input
//               onChange={onChangeHandler}
//               className="w-full border px-6 py-1.5 rounded-md"
//               type="email"
//               name="email"
//               id="email"
//               value={formData.email}
//             />
//           </div>
//           <div>
//             <label className="text-gray-500" htmlFor="password">
//               Password
//             </label>
//             <input
//               onChange={onChangeHandler}
//               className="w-full border px-6 py-1.5 rounded-md"
//               type="password"
//               name="password"
//               id="password"
//               value={formData.password}
//             />
//           </div>
//           <div className="py-2">
//             <button className="bg-[#0360D9] cursor-pointer text-white px-6 py-2 rounded-md">
//               Login
//             </button>
//           </div>
//           <p className="text-gray-500">
//             Don't have an account?{" "}
//             <span className="pl-2 text-[#0360D9] cursor-pointer">
//               <Link href={`/signup?redirect=${redirect}`}>Sign Up</Link>
//             </span>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Login from "../../../config/login";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [redirect, setRedirect] = useState("/");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const param = searchParams.get("redirect");
    if (param) {
      setRedirect(param);
    }
  }, [searchParams]);

  const onChangeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await Login(formData.email, formData.password);
      if (response) {
        console.log(response, "response from login");
        router.push(redirect);
      }
    } catch (error) {
      console.log(error, "error");
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className="w-full h-screen">
      <div className="p md:flex md:h-screen r w-full font-ibm">
        <img
          className="md:w-1/2 bg-gradient-to-t from-black via-purple-500 to-indigo-500 h-screen hidden md:block"
          src="https://images.pexels.com/photos/2389348/pexels-photo-2389348.jpeg"
          alt=""
        />
        <form
          onSubmit={onSubmitHandler}
          className="w-80 md:w-1/2 shadow hidden md:block rounded-xl space-y-2 mx-auto p-8"
        >
          <h1 className="text-2xl text-center font-bold">Login</h1>
          <div>
            <label className="text-gray-500" htmlFor="email">Email</label>
            <input
              onChange={onChangeHandler}
              className="w-full border px-6 py-1.5 rounded-md"
              type="email"
              name="email"
              id="email"
              value={formData.email}
            />
          </div>
          <div>
            <label className="text-gray-500" htmlFor="password">Password</label>
            <input
              onChange={onChangeHandler}
              className="w-full border px-6 py-1.5 rounded-md"
              type="password"
              name="password"
              id="password"
              value={formData.password}
            />
          </div>
          <div className="py-2">
            <button className="bg-[#0360D9] cursor-pointer text-white px-6 py-2 rounded-md">
              Login
            </button>
          </div>
          <p className="text-gray-500">
            Don't have an account?{" "}
            <span className="pl-2 text-[#0360D9] cursor-pointer">
              <Link href={`/signup?redirect=${redirect}`}>Sign Up</Link>
            </span>
          </p>
        </form>
      </div>

      {/* Mobile form */}
      <div className="w-80 md:hidden flex flex-col my-44 mx-auto justify-between items-center">
        <form
          onSubmit={onSubmitHandler}
          className="shadow rounded-xl space-y-2 mx-auto p-8"
        >
          <h1 className="text-2xl text-center font-bold">Login</h1>
          <div>
            <label className="text-gray-500" htmlFor="email">Email</label>
            <input
              onChange={onChangeHandler}
              className="w-full border px-6 py-1.5 rounded-md"
              type="email"
              name="email"
              id="email"
              value={formData.email}
            />
          </div>
          <div>
            <label className="text-gray-500" htmlFor="password">Password</label>
            <input
              onChange={onChangeHandler}
              className="w-full border px-6 py-1.5 rounded-md"
              type="password"
              name="password"
              id="password"
              value={formData.password}
            />
          </div>
          <div className="py-2">
            <button className="bg-[#0360D9] cursor-pointer text-white px-6 py-2 rounded-md">
              Login
            </button>
          </div>
          <p className="text-gray-500">
            Don't have an account?{" "}
            <span className="pl-2 text-[#0360D9] cursor-pointer">
              <Link href={`/signup?redirect=${redirect}`}>Sign Up</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;


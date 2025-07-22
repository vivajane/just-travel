"use client";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import SignUp from "../../../config/signup";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import Loading from "../components/Loading";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const onChangeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(formData);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    if (
      !formData.email ||
      !formData.password ||
      !formData.userName ||
      !formData.confirmPassword
    ) {
      setMessage("All fields are required");
      return;
    }

    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    if (!validateEmail(formData.email)) {
      setMessage("Invalid email format");
      return;
    }

    setTimeout(() => {
      setMessage("");
    }, 3000);
    try {
      setLoading(true);
      const response = await SignUp(
        formData.email,
        formData.password,
        formData.userName
      );
      localStorage.setItem(
        "item",
        JSON.stringify({ email: formData.email, userName: formData.userName })
      );
      console.log("local storage :", {email: formData.email,
        userName: formData.userName,})

      if (response) {
        toast.success("Account created successfully");
        setFormData({
          email: "",
          userName: "",
          password: "",
          confirmPassword: "",
        });

        setTimeout(() => {
          setMessage("");
          router.push(redirect);
        }, 3000);
      } else {
        setMessage("Error creating account");
      }
    } catch (error) {
      console.log(error, "error from signup page");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full">
      {loading && <Loading />}
      <div className="p md:flex h-scree r w-full font-ibm">
        <img
          className="md:w-1/2 bg-gradient-to-t w-full from-black via-purple-500 to-indigo-500 h-screen hidden md:block"
          src="https://images.pexels.com/photos/2389348/pexels-photo-2389348.jpeg"
          alt=""
        />
        <img
          className="md:hidden bg-gradient-to-t w-full from-black via-purple-500 to-indigo-500 h-96  "
          src="https://images.pexels.com/photos/2389348/pexels-photo-2389348.jpeg"
          alt=""
        />
        <form
          onSubmit={onSubmit}
          className=" md:w-1/2 shadow rounded-xl space-y-2 mx-auto p-8 "
        >
          <h1 className="text-2xl font-bold text-center ">Create an account</h1>

          <div>
            <label className="text-gray-500" htmlFor="email">
              Email
            </label>
            <input
              onChange={onChangeHandler}
              className="w-full border px-6 py-2 rounded-md"
              type="email"
              name="email"
              id="email"
              value={formData.email}
            />
          </div>
          <div>
            <label className="text-gray-500" htmlFor="userName">
              UserName
            </label>
            <input
              onChange={onChangeHandler}
              className="w-full border px-6 py-2 rounded-md"
              type="text"
              name="userName"
              id="userName"
              value={formData.userName}
            />
          </div>
          <div>
            <label className="text-gray-500" htmlFor="password">
              Password
            </label>
            <input
              className="w-full border px-6 py-2 rounded-md"
              type="password"
              name="password"
              id="password"
              onChange={onChangeHandler}
              value={formData.password}
            />
            {message && <p className="text-red-500">{message}</p>}
          </div>
          <div>
            <label className="text-gray-500" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="w-full border px-6 py-2 rounded-md"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={onChangeHandler}
              value={formData.confirmPassword}
            />
          </div>
          <div className="py-2">
            <button className="bg-[#0360D9] cursor-pointer text-white px-6 py-2 rounded-md">
              Create account
            </button>
          </div>
          <p className="text-gray-500">
            Already have an account?{" "}
            <span className="text-[#0360D9] cursor-pointer">
              <Link href={`/login?redirect=${redirect}`}>Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

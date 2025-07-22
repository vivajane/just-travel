"use client";
import React, { useContext, useState } from "react";
import { ContextActivity } from "../components/Context";
import axios from "axios";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";

const Summary = () => {
  // const checkPaystack = () => {
  //   const popup = new Paystack();

  //   popup.newTransaction({
  //     key: "pk_test_ca40184e1f89bd86794ee8792a02dba72ed940a4",
  //     email: "obuekwekosi@gmail.com",
  //     amount: total * 100,
  //     onSuccess: (transaction) => {
  //       console.log(transaction);
  //       console.log("Payment successful!");
  //       setCart({});
  //       navigate("/cartform");
  //     },
  //     onLoad: (response) => {
  //       console.log("onLoad: ", response);
  //     },
  //     onCancel: () => {
  //       console.log("onCancel");
  //     },
  //     onError: (error) => {
  //       console.log("Error: ", error.message);
  //     },
  //   });
  // };
  const { added, setAdded, loading, setLoading } = useContext(ContextActivity);
  const router = useRouter();
  const auth = getAuth();
  const user = auth.currentUser;
  const total = added.reduce((sum, activity) => {
    return sum + activity.price * activity.quantity;
  }, 0);

  const checkPayment = async () => {
    try {
      const response = await axios.post("/api/paystack", {
        email: user?.email,
        amount: total * 100,
      });
      console.log(total, "from total");
      const { url } = response.data;
      if (url) {
        window.location.href = url;
        localStorage.removeItem("added");
        return;
      }
    } catch (error) {
      console.log("error");
      alert("payment failed");
    } finally {
      setLoading(false);
    }
  };

  const deleted = (id) => {
    const deletedItem = added.filter((item) => item.id !== id);
    setAdded(deletedItem);
    router.push("/funactivities");
  };
  if (!added || added.length === 0)
    return (
      <h1 className="text-center pt-30 pb-10 text-2xl font-bold">
        No Saved Activities
      </h1>
    );

  return (
    <div className="pt-20">
      <div className="flex py-20 px-3 sm:px-12 md:px-16 flex-col gap-4 ">
        {added &&
          added?.map((activity, index) => (
            <div
              key={`${activity.id}-${index}`}
              className="flex text-left flex-col space-y-3 h-[250px] md:w-[600px] bg-white text-black rounded p-2 justify-center"
            >
              <p className="font-bold">
                <span>Name: </span>
                {activity.name}
              </p>
              <p className="font-bold">
                <span>Quantity: </span>
                {activity.quantity}
              </p>
              <p className="font-bold">
                <span>Date: </span>
                {activity.date}
              </p>
              <p className="font-bold">
                <span>Time: </span>
                {activity.time}
              </p>
              <p className="font-bold">
                <span>Price: </span>
                {activity.price}
              </p>
              <p className="font-bold">
                <span>Total: </span>
                {activity.price * activity.quantity}
              </p>
              <div className="flex text-xs gap-3 md:justify-between">
                <div className="flex">
                  <button
                    disabled={loading}
                    onClick={checkPayment}
                    className="bg-pink-700 my-3 md:px-4 px-2 cursor-pointer text-white py-2 rounded"
                  >
                    {" "}
                    {loading ? "Processing..." : "Proceed to Checkout"}
                  </button>
                </div>
                <div className="flex">
                  <button
                    onClick={() => deleted(activity.id)}
                    className="bg-pink-700 cursor-pointer my-3 px-2 md:px-4 text-white py-2 rounded"
                  >
                    {" "}
                    {loading && (
                      <div className="flex justify-center items-center w-full h-full">
                        <div className="animate-spin rounded-full h-4 w-4 border-4 border-b-pink-700 border-pink-300">
                          "Processing..."
                        </div>
                      </div>
                    )}
                    Cancel Payment
                  </button>
                </div>
                <div></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Summary;

"use client";
import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white py-20 text-gray-800">

      <section className="relative bg-pink-700 text-white py-20 px-6 md:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our World</h1>
          <p className="text-lg md:text-xl font-light">
            Where fun meets comfort, and memories are made.
          </p>
        </div>
      </section>

     
      <section className="flex flex-col md:flex-row items-centerr justify-between gap-10 px-6 md:px-24 py-16">
        <div className="w-full  md:w-1/2">
          <Image
            src="https://images.pexels.com/photos/2626097/pexels-photo-2626097.jpeg" 
            alt="Park view"
            width={600}
            height={100}
            
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold text-pink-700">Who We Are</h2>
          <p className="text-lg text-gray-700">
            Our app is your gateway to an unforgettable escape, whether you're booking
            a weekend at our luxury hotel or planning fun activities at our pleasure park.
          </p>
          <p className="text-lg text-gray-700">
            We’re passionate about creating magical moments for individuals, couples,
            friends, and families. From seamless bookings to warm hospitality, we bring
            excellence every step of the way.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6 md:px-24">
        <h2 className="text-3xl font-semibold text-center text-pink-700 mb-10">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h3 className="text-xl font-bold text-pink-700 mb-2">Simplicity</h3>
            <p>
              Our platform is designed for ease, book with just a few clicks and relax.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h3 className="text-xl font-bold text-pink-700 mb-2">Excellence</h3>
            <p>
              From service to interface, we are committed to giving you top-quality
              experiences.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center">
            <h3 className="text-xl font-bold text-pink-700 mb-2">Joy</h3>
            <p>
              Every visit, every activity, every click , we want you to feel good.
            </p>
          </div>
        </div>
      </section>

     
      <section className="py-16 px-6 md:px-24 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-pink-700">
          Thank you for choosing us!
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We can't wait to host you, thrill you, and help you create moments that matter.
          Your journey to relaxation, adventure, and fun starts here.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;

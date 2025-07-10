import React from "react";

const Loyalty = () => {
  return (
    <section className="bg-gradient-to-br from-pink-200 via-red-100 py-10 to-yellow-100 md:py-20 px-6 md:px-32">
      <div data-aos="fade-right" className="max-w-4xl mx-auto text-center">
        <h2
          data-aos="fade-right"
          className="md:text-4xl text-2xl font-bold text-red-700 mb-4 font-comfortaa"
        >
          
          Our Loyalty Program
        </h2>
        <p className="text-gray-700 text-lg md:text-xl mb-8 font-poppins">
          The more fun you have, the more rewards you earn!
        </p>
        <ul data-aos="fade-up" className="grid gap-6 md:grid-cols-3 text-left">
          <li className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-red-600 mb-2">
              {" "}
              Earn Points
            </h3>
            <p className="text-gray-600">
              Get 1 point for every ₦1000 you spend on tickets, snacks, and
              activities.
            </p>
          </li>
          <li className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-red-600 mb-2">
              {" "}
              Free Tickets
            </h3>
            <p className="text-gray-600">
              Redeem points for discounts, free entry, or surprise gifts.
            </p>
          </li>
          <li className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-red-600 mb-2"> VIP Access</h3>
            <p className="text-gray-600">
              Get early access to events and exclusive member-only activities.
            </p>
          </li>
        </ul>
        <button className="mt-10 bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition duration-300">
          Join Now - It’s Free!
        </button>
      </div>
    </section>
  );
};

export default Loyalty;

import React from "react";

const Reach = () => {
  return (
   <div className="md:px-20 px-8 py-10 ">
     <div className="px-6 shadow-fuchsia-950 rounded-2xl py-8 shadow-md md:px-12 ">
      <div className="lg:flex justify-between">
        <div>
          <h1 className="text-2xl font-bold ">FunVerge Center</h1>
          <p className="py-2">9 Chinese Road, 6th Floor, Lekki Phase 1, Lagos</p>
          <p>Lagos State</p>
        </div>
        <div>
            <h1 className="text-2xl font-bold ">Opening Hours</h1>
            <h2 className="py-2">9AM - 9PM</h2>
        </div>
        <div>
            <h1 className="text-2xl font-bold ">Contact Us</h1>
           <div className="py-2">
             <a href="mailto:funverge@gmail.com">funverge@gmail.com</a>
           </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Reach;

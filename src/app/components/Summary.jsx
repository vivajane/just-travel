// "use client"
// import React from "react";

// const Summary = ({ added, setShow, setAdded }) => {

//     const deleted = (id) => {
//         const deletedItem = added.filter((item) => item.id !== id);
//         setAdded(deletedItem);
//         setShow(false)
//     }
    
    
//   return (
//     <div onClick={() => setShow(false)} className="bg-black inset-0 fixed top-0 z-50 right-0 left-0 opacity flex flex-col justify-center items-center">
//       <div className="flex flex-col gap-4 ">
        
//         {added?.map((activity, index) => (
//           <div 
//              key={`${activity.id}-${index}`}
//             className="flex text-left flex-col space-y-3 px-6 h-[250px] w-[600px] bg-white text-black rounded p-2 justify-center"
//           >
//             <p className="font-bold"><span>Name:   </span>{activity.name}</p>
//             <p className="font-bold"><span>Quantity:   </span>{activity.quantity}</p>
//             <p className="font-bold"><span>Date:   </span>{activity.date}</p>
//             <p className="font-bold"><span>Time:   </span>{activity.time}</p>
//             <p className="font-bold"><span>Price:   </span>{activity.price}</p>
//             <p className="font-bold"><span>Total:   </span>{activity.price * activity.quantity}</p>
//             <button className="bg-pink-700 my-3 text-white px-4 py-2 rounded" onClick={() => deleted(activity.id)}>Proceed to Checkout</button>
            
//           </div>
//         ))}
        
//       </div>
      
//     </div>
//   );
// };

// export default Summary;

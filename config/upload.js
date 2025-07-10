// "use client"; // 👈 Required for Next.js client components

// import { setDoc, doc } from "firebase/firestore";
// import { db } from "./firebase.Config";
// import { activities } from "./activities";

// export default function UploadPage() {
//   const handleUpload = async () => {
//   console.log("Upload started..."); // 👈 Check this logs
//   for (let item of activities) {
//     await setDoc(doc(db, "activities", item.id.toString()), item);
//   }
//   console.log("Upload complete!");
//   alert("Upload complete!");
// };


//   return (
//     <div className="p-10">
//       <button
//         onClick={handleUpload}
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         Upload All Activities
//       </button>
//     </div>
//   );
// }

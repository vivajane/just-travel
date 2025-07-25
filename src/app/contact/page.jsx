"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ContactModal from "../components/ContactModal";


export default function Contact() {
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);

  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const ShowModal = () => {
    setShow(true);
   setTimeout(() => {
    router.push("/");
    console.log("show modal");
   },3000);
   
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    // setMessage("Thank you! We’ll get back to you soon.");
    // setForm({ name: "", email: "", message: "" });
    ShowModal();
  };

  return (
    <article className="py-10">
      <section className="max-w-lg mx-auto px-6 mt-28 bg-white rounded shadow">
        {message && <p className="text-green-500">{message}</p>}
        <h2 className="text-3xl font-bold mb-4 pt-4 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-3  pb-6">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>
      {show && <ContactModal/>}
    </article>
  );
}

"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Home() {
  const formRef = useRef(null);

  const sendForm = async (e) => {
    e.preventDefault();

    try {
      // 1️⃣ Send Email via EmailJS
       await emailjs.sendForm(
        "service_q6kww7l",
        "template_9diwl88",
        formRef.current,
        "aEh32CuuIa3e4VJIl"
       );

      // 2️⃣ Send backup to Google Sheets
      await fetch("https://script.google.com/macros/s/AKfycbxB22A5xbIIBBoUKJrEE7MC57oRS07kbo6RG0e4i_jnLukHhBK_6_Ex3OZ8CCDqqlDJoA/exec", {
        method: "POST",
        body: new FormData(formRef.current),
      });

      alert("Delivery request submitted successfully.");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Loud Logistics
        </motion.h1>

        <p className="text-lg md:text-xl max-w-2xl text-gray-300 mb-8">
          Premium cannabis delivery: Now Serving Montgomery County.
        </p>

        <a
          href="#request"
          className="rounded-2xl px-8 py-4 bg-white text-black font-semibold"
        >
          Request Delivery
        </a>
      </section>

      <section id="request" className="px-6 py-24 bg-zinc-900">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Request Delivery
        </h2>

        <form
          ref={formRef}
          onSubmit={sendForm}
          className="max-w-xl mx-auto space-y-6"
        >
          <input
            name="name"
            className="w-full p-3 rounded-xl bg-black border border-zinc-800"
            placeholder="Full Name"
            required
          />

          <input
            name="phone"
            className="w-full p-3 rounded-xl bg-black border border-zinc-800"
            placeholder="Phone Number"
            required
          />

          <input
            name="location"
            className="w-full p-3 rounded-xl bg-black border border-zinc-800"
            placeholder="City / County"
            required
          />

          <select
            name="timeframe"
            className="w-full p-3 rounded-xl bg-black border border-zinc-800"
          >
            <option>ASAP</option>
            <option>Within 1 hour</option>
            <option>Later today</option>
          </select>

          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-white text-black font-semibold"
          >
            Submit Request
          </button>
        </form>
      </section>
    </main>
  );
}

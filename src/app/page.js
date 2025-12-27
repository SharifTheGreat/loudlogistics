"use client";

import { motion } from "framer-motion";

export default function Home() {
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
          Premium cannabis delivery across the DMV.
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

        <form className="max-w-xl mx-auto space-y-6">
          <input
            className="w-full p-3 rounded-xl bg-black border border-zinc-800"
            placeholder="Full Name"
            required
          />

          <input
            className="w-full p-3 rounded-xl bg-black border border-zinc-800"
            placeholder="Phone Number"
            required
          />

          <input
            className="w-full p-3 rounded-xl bg-black border border-zinc-800"
            placeholder="City / County"
            required
          />

          <select className="w-full p-3 rounded-xl bg-black border border-zinc-800">
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

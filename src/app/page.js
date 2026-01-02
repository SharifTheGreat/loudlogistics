"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbwRYKU2feRj0MlKTK6he_yM0CRzEjWWuE_rp7Pvdn-BKb456AQsJAbNqqJMgQ8UFRMokg/execOGLE_APPS_SCRIPT_URL_HERE", {
        method: "POST",
        body: new FormData(formRef.current),
      });

      setSubmitted(true);
      formRef.current.reset();
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-xl space-y-10">

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Loud Logistics
        </motion.h1>

        <p className="text-center text-zinc-400">
          Join the interest list and we’ll reach out the moment we’re cleared for takeoff.
        </p>

        {/* Info Card */}
        <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 space-y-3">
          <h2 className="text-lg font-semibold">What’s Going On?</h2>
          <ol className="list-decimal list-inside text-zinc-300 space-y-1">
            <li>We’re completing state licensing requirements</li>
            <li>You join the interest list</li>
            <li>We notify you when Loud Logistics officially launches</li>
          </ol>
          <p className="text-sm text-zinc-500 pt-2">
            This helps us launch in the right areas first.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6">
          {submitted ? (
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-green-500">
                You’re on the list 🚀
              </h3>
              <p className="text-zinc-400">
                We’ll reach out as soon as we’re legally cleared to launch.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-lg font-semibold mb-2">Join the Interest List</h2>
              <p className="text-sm text-zinc-400 mb-6">
                Tell us where you’re located. Contact info is optional, but recommended for early access.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

                {/* Area */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">
                    What area are you in?
                  </label>
                  <input
                    name="area"
                    required
                    placeholder="City or neighborhood"
                    className="w-full bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">
                    Email (optional – updates & early access)
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">
                    Phone (optional – text when we go live)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(555) 123-4567"
                    className="w-full bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">
                    Anything you want us to know?
                  </label>
                  <textarea
                    name="notes"
                    rows="3"
                    placeholder="Optional"
                    className="w-full bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-600 hover:bg-green-700 transition rounded-md py-3 font-semibold disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Keep Me in the Loop"}
                </button>
              </form>
            </>
          )}
        </div>

        {/* Footer Disclaimer */}
        <p className="text-xs text-zinc-500 text-center">
          Loud Logistics does not currently offer delivery services. This site collects interest only and does not facilitate cannabis sales or transportation.
        </p>
      </div>
    </main>
  );
}

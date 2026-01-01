"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      await fetch("/api/interest", {
        method: "POST",
        body: formData,
      });

      alert(
        "You’re on the list. We’re handling the legal side now, and a logistics specialist will reach out as soon as Loud Logistics is cleared to operate. Thanks for riding with us."
      );

      e.target.reset();
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-16">
      {/* Hero */}
      <section className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          🚓 The Laws Pulled Us Over
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-4">
          Loud Logistics is getting its paperwork right.
        </p>
        <p className="text-gray-400 mb-8">
          Join the interest list and we’ll reach out the moment we’re cleared for
          takeoff.
        </p>
      </section>

      {/* How It Works */}
      <section className="max-w-xl w-full bg-zinc-900 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-semibold mb-4">What’s Going On?</h2>
        <ol className="space-y-2 text-gray-300">
          <li>1. We’re completing state licensing requirements</li>
          <li>2. You join the interest list</li>
          <li>3. We notify you when Loud Logistics is officially live</li>
        </ol>
        <p className="text-sm text-gray-400 mt-4">
          This helps us launch in the right areas first.
        </p>
      </section>

      {/* Interest Form */}
      <section className="max-w-xl w-full bg-zinc-900 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Join the Interest List</h2>
        <p className="text-gray-400 mb-6">
          Tell us where you’re located. Contact info is optional, but recommended
          for early access.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="area"
            placeholder="What area are you in?"
            required
            className="w-full p-3 rounded text-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Email (optional – updates & early access)"
            className="w-full p-3 rounded text-black"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone (optional – text when we go live)"
            className="w-full p-3 rounded text-black"
          />

          <textarea
            name="note"
            placeholder="Anything you want us to know?"
            className="w-full p-3 rounded text-black"
            rows={3}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 transition py-3 rounded font-semibold disabled:opacity-50"
          >
            {loading ? "Submitting…" : "Keep Me in the Loop"}
          </button>
        </form>
      </section>

      {/* Footer Disclaimer */}
      <footer className="max-w-xl text-center text-xs text-gray-500 mt-10">
        Loud Logistics does not currently offer delivery services. This site
        collects interest only and does not facilitate cannabis sales or
        transportation.
      </footer>
    </main>
  );
}

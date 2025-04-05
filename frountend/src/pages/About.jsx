import React from "react";
export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 text-green-700 text-center">
        About <span className="text-green-900">EcoTrack 🌿</span>
      </h1>

      {/* Mission */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">🌍 Our Mission</h2>
        <p className="text-lg leading-7">
          EcoTrack is designed to help individuals become more aware of their environmental impact.
          By tracking daily habits, calculating your carbon footprint, and rewarding sustainable behavior,
          we aim to build a global community committed to fighting climate change — one action at a time.
        </p>
      </section>

      {/* How It Works */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">⚙️ How It Works</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Log in and create your EcoTrack profile with a user image</li>
          <li>Track your daily activities to calculate your carbon footprint</li>
          <li>Submit eco-friendly actions like saving energy or reducing waste</li>
          <li>Receive EcoBonus points for your green habits</li>
          <li>Monitor your overall progress and get tips to improve</li>
        </ul>
      </section>

      {/* Features */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">✨ Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 border rounded shadow-sm">
            <h3 className="text-xl font-medium text-green-700 mb-1">📊 Carbon Footprint Tracker</h3>
            <p>Get real-time estimates of your emissions based on transport, energy, and lifestyle.</p>
          </div>
          <div className="p-4 border rounded shadow-sm">
            <h3 className="text-xl font-medium text-green-700 mb-1">🏆 Eco Bonus Scoring</h3>
            <p>Earn points for actions like recycling, using renewable energy, or reducing plastic use.</p>
          </div>
          <div className="p-4 border rounded shadow-sm">
            <h3 className="text-xl font-medium text-green-700 mb-1">👤 Profile with Image</h3>
            <p>Create a personal eco-profile with image upload and track your progress over time.</p>
          </div>
          <div className="p-4 border rounded shadow-sm">
            <h3 className="text-xl font-medium text-green-700 mb-1">📅 Daily Challenges (Coming Soon)</h3>
            <p>Set your own eco-goals with easy, medium, and hard challenges to stay consistent.</p>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">💚 Why It Matters</h2>
        <p className="text-lg leading-7">
          Every step you take — whether it's switching off lights, walking instead of driving, or recycling your waste —
          contributes to a healthier planet. EcoTrack helps you become more mindful and makes your efforts visible,
          impactful, and rewarding.
        </p>
      </section>

      {/* Optional: Team Section */}
      {/* 
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">👨‍💻 Meet the Team</h2>
        <p>We are a group of passionate developers working towards a greener future.</p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>You</strong> – Full-stack Developer, Eco Warrior</li>
          <li>Teammate 1 – Frontend Developer</li>
          <li>Teammate 2 – UI/UX + Presentation</li>
        </ul>
      </section>
      */}

      {/* Inspirational Quote */}
      <section className="text-center mt-16">
        <p className="text-xl italic text-green-800">
          "The greatest threat to our planet is the belief that someone else will save it."
        </p>
        <p className="text-green-600 mt-2">– Robert Swan</p>
      </section>
    </div>
  );
}

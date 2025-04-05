import { useState } from "react";

export default function FootprintForm() {
  const [transport, setTransport] = useState("");
  const [electricity, setElectricity] = useState("");
  const [diet, setDiet] = useState("");
  const [water, setWater] = useState("");

  const [footprintResult, setFootprintResult] = useState({});

  const handleFootprintSubmit = async (e) => {
    e.preventDefault();
    const payload = { transport, electricity, diet, water: Number(water) };
    console.log(payload)

    const res = await fetch("http://localhost:5000/calc/footPrint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    setFootprintResult(data);
    console.log(data)
  };

  let level = "";
let color = "";

if (footprintResult.carbonFootprint <= 4) {
  level = "Low (Good)";
  color = "bg-green-200 text-green-800";
} else if (footprintResult.carbonFootprint <= 10) {
  level = "Moderate";
  color = "bg-yellow-200 text-yellow-800";
} else {
  level = "High (Danger)";
  color = "bg-red-200 text-red-800";
}

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow-md mt-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">🌍 Carbon Footprint Calculator</h2>

      <form onSubmit={handleFootprintSubmit} className="space-y-4">
        {/* Transport */}
        <div>
          <label className="block mb-1 font-semibold">Transport Mode</label>
          <select
            value={transport}
            onChange={(e) => setTransport(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="bus">Bus</option>
            <option value="walk">Walk</option>
          </select>
        </div>

        {/* Electricity */}
        <div>
          <label className="block mb-1 font-semibold">Electricity Usage</label>
          <select
            value={electricity}
            onChange={(e) => setElectricity(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        {/* Diet */}
        <div>
          <label className="block mb-1 font-semibold">Diet Type</label>
          <select
            value={diet}
            onChange={(e) => setDiet(e.target.value)}
            required
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select</option>
            <option value="nonveg">Non-Veg</option>
            <option value="mixed">Mixed</option>
            <option value="veg">Veg</option>
          </select>
        </div>

        {/* Water Usage */}
        <div>
          <label className="block mb-1 font-semibold">Water Usage (litres/day)</label>
          <input
            type="number"
            value={water}
            onChange={(e) => setWater(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded font-semibold"
        >
          Calculate Footprint
        </button>
      </form>

      {footprintResult && (
        <div className={`p-4 mt-2 rounded-lg shadow-md ${color}`}>
        <p className="text-xl font-semibold">Your Carbon Footprint:</p>
        <p className="text-3xl font-bold">{footprintResult.carbonFootprint} tonnes CO₂e/year</p>
        <p className="mt-2 text-lg font-medium">Level: {level}</p>
      </div>
      )}
     
    </div>
  );
}

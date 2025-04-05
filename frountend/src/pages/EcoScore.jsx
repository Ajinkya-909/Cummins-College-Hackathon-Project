import { useState } from "react";

export default function EcoBonusForm() {
  const [form, setForm] = useState({
    wasteSegregation: "",
    compost: "",
    foodWaste: "",
    turnOffLights: "",
    efficientAppliances: "",
    avoidPlastic: "",
    growPlants: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/calc/eco-bonus", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow-md mt-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">🌱 Eco Bonus Calculator</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: "Do you segregate waste?", name: "wasteSegregation" },
          { label: "Do you compost at home?", name: "compost" },
          { label: "How often do you waste food?", name: "foodWaste", options: ["rarely", "sometimes", "often"] },
          { label: "Do you turn off lights when not needed?", name: "turnOffLights" },
          { label: "Do you use efficient appliances?", name: "efficientAppliances" },
          { label: "Do you avoid plastic?", name: "avoidPlastic" },
          { label: "Do you grow plants?", name: "growPlants" },
        ].map(({ label, name, options }) => (
          <div key={name}>
            <label className="block mb-1 font-semibold">{label}</label>
            <select
              name={name}
              value={form[name]}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">Select</option>
              {options
                ? options.map((opt) => <option key={opt} value={opt}>{opt}</option>)
                : ["yes", "no"].map((opt) => <option key={opt} value={opt}>{opt}</option>)
              }
            </select>
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded font-semibold"
        >
          Calculate Eco Bonus
        </button>
      </form>

      {result && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded">
          <p className="font-bold text-green-800">Eco Bonus Score: {result.ecoBonusScore}</p>
          <p className="text-green-700 mt-2">{result.message}</p>
          <p className="text-sm text-green-600 italic mt-1">🌟 Tip: {result.tip}</p>
        </div>
      )}
    </div>
  );
}

import express from 'express'

export const foorPrint = (req, res) => {
    const { transport, electricity, diet, water } = req.body;
  
    let total = 0;
  
    // Transport
    switch (transport) {
      case 'car':
        total += 5.0;
        break;
      case 'bike':
        total += 2.0;
        break;
      case 'bus':
        total += 1.5;
        break;
      case 'walk':
        total += 0.0;
        break;
      default:
        total += 0;
    }
  
    // Electricity
    switch (electricity) {
      case 'high':
        total += 6.0;
        break;
      case 'medium':
        total += 3.0;
        break;
      case 'low':
        total += 1.0;
        break;
      default:
        total += 0;
    }
  
    // Diet
    switch (diet) {
      case 'nonveg':
        total += 5.0;
        break;
      case 'mixed':
        total += 3.0;
        break;
      case 'veg':
        total += 1.5;
        break;
      default:
        total += 0;
    }
  
    // Water usage
    const waterFactor = 0.002; // kg CO2 per liter
    total += water * waterFactor;
  
    const result = total.toFixed(2);
  
    res.json({ carbonFootprint: result });
  };

  export const calculateEcoBonus = (req, res) => {
    const {
      wasteSegregation,
      compost,
      foodWaste,
      turnOffLights,
      efficientAppliances,
      avoidPlastic,
      growPlants,
    } = req.body;
  
    let ecoBonusScore = 0;
  
    // ✅ Waste Reduction
    if (wasteSegregation === 'yes') ecoBonusScore += 1.0;
    if (compost === 'yes') ecoBonusScore += 1.5;
  
    switch (foodWaste) {
      case 'rarely':
        ecoBonusScore += 1.0;
        break;
      case 'sometimes':
        ecoBonusScore += 0.5;
        break;
      case 'often':
        ecoBonusScore += 0;
        break;
      default:
        break;
    }
  
    // ⚡ Energy Saving
    if (turnOffLights === 'yes') ecoBonusScore += 0.5;
    if (efficientAppliances === 'yes') ecoBonusScore += 1.0;
  
    // 🌱 Eco-Friendly Habits
    if (avoidPlastic === 'yes') ecoBonusScore += 1.0;
    if (growPlants === 'yes') ecoBonusScore += 0.5;
  
    // 🎯 Feedback message variation
    let feedbackMessage = "";
  
    if (ecoBonusScore >= 6) {
      feedbackMessage = "🌱 Incredible! You're an eco-champion, saving a huge amount of CO₂ daily!";
    } else if (ecoBonusScore >= 4) {
      feedbackMessage = "💪 Great job! Your daily actions are making a real difference for the planet.";
    } else if (ecoBonusScore >= 2) {
      feedbackMessage = "👍 You're on the right track! Keep pushing toward greener habits.";
    } else if (ecoBonusScore > 0) {
      feedbackMessage = "🌍 Every small step counts. Try adding one more eco-friendly habit tomorrow!";
    } else {
      feedbackMessage = "🤔 Looks like there's room to grow. Ready to go green today?";
    }
  
    // 🌿 Random tip
    const tips = [
      "Try composting food scraps instead of throwing them away.",
      "Use reusable water bottles and shopping bags.",
      "Turn off appliances when not in use.",
      "Avoid food wastage by planning meals.",
      "Grow indoor plants—they clean air naturally!",
      "Swap car rides for walking or cycling when possible.",
      "Carry your own tiffin or containers to reduce packaging waste.",
      "Switch to LED lights to save energy."
    ];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
  
    // 📦 Final response
    res.json({
      ecoBonusScore: ecoBonusScore.toFixed(2),
      message: feedbackMessage,
      tip: randomTip
    });
  };
  
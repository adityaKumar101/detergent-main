import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "🧼",
      title: "Advanced Stain Removal",
      description: "Powerful formula eliminates tough stains including oil, grease, and food particles with ease."
    },
    {
      icon: "🌈",
      title: "Color Protection",
      description: "Special enzymes protect fabric colors while delivering brilliant cleaning performance."
    },
    {
      icon: "👕",
      title: "Fabric Care",
      description: "Gentle on all fabric types while maintaining powerful cleaning action for lasting quality."
    },
    {
      icon: "🌿",
      title: "Eco-Friendly Formula",
      description: "Biodegradable ingredients that are safe for your family and the environment."
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose Ghar?</h2>
          <p>Industry-leading technology meets superior cleaning performance</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
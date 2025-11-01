import React from 'react';

const HowToUse = () => {
  const steps = [
    {
      number: "1",
      title: "Measure",
      description: "Add 2-3 scoops of Ghar powder to your washing machine"
    },
    {
      number: "2",
      title: "Load",
      description: "Place your clothes in the machine, separating whites and colors"
    },
    {
      number: "3",
      title: "Wash",
      description: "Select your preferred wash cycle and temperature"
    },
    {
      number: "4",
      title: "Enjoy",
      description: "Experience brilliantly clean, fresh-smelling clothes"
    }
  ];

  return (
    <section className="how-to-use" id="how-to-use">
      <div className="container">
        <div className="section-title">
          <h2>How to Use Ghar</h2>
          <p>Simple steps for perfect results every time</p>
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
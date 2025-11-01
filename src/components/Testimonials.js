import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Ghar removed coffee stains that other detergents couldn't. My white shirts have never looked better!",
      author: "Sarah Johnson",
      location: "New York"
    },
    {
      text: "I love how fresh my clothes smell after washing. It's gentle on my sensitive skin too!",
      author: "Michael Chen",
      location: "California"
    },
    {
      text: "As a mother of three, I need a detergent that works hard. Ghar handles all our messy situations!",
      author: "Emily Rodriguez",
      location: "Texas"
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>What Our Customers Say</h2>
          <p>Real results from happy customers</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-author">{testimonial.author}</p>
              <p className="testimonial-location">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
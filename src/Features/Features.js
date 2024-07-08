import React from 'react';
import './Features.css';

const Features = () => (
  <div className="features">
    <h2>Why Choose Cypher?</h2>
    <div className="features-list">
      <div className="feature-item">
        <h3>Instant Coding Help</h3>
        <p>Get instant assistance with coding problems, from syntax errors to complex algorithms.</p>
      </div>
      <div className="feature-item">
        <h3>Expert Knowledge</h3>
        <p>Access a wealth of knowledge and expertise, powered by the Google Gemini API.</p>
      </div>
      <div className="feature-item">
        <h3>Personalized Responses</h3>
        <p>Receive responses tailored to your coding style and preferences.</p>
      </div>
      <div className="feature-item">
        <h3>24/7 Availability</h3>
        <p>Cypher is available around the clock to help you with your coding needs.</p>
      </div>
    </div>
  </div>
);

export default Features;

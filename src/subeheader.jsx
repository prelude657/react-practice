import React from 'react';
import './Subheader.css';

const Subheader = ({ isLightOn }) => {
  return (
    <div className="subheader-container">
      <h3 className="subheader-title">Kurtis' Top Hotel Destinations</h3>
      <p className={`subheader-paragraph ${isLightOn ? 'light' : 'dark'}`}>
        Kurtis has partnered with these hand-picked hotels to bring you unbeatable discounts on your next dream vacation. These extraordinary hotels, from luxurious beach resorts to tranquil mountain retreats, are truly the best the world has to offer. Whether you seek adventure, relaxation, or elegance, we’ve got you covered. Don’t miss out on this once-in-a-lifetime opportunity to stay at these beautiful destinations at a fraction of the cost. Book your stay now and experience the perfect getaway — all thanks to Kurtis!
      </p>
    </div>
  );
};

export default Subheader;

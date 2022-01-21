import React from "react";
import heroImage from "../assets/images/food4.jpg";

export const HeroImage = () => {
  return (
    <div className="hero-image">
      <img src={heroImage} alt="HeroImage" />
      <div className="hero-text">
        <p className="title-text">Are you hungry?</p>
        <p className="title-text">Join us</p>
      </div>
    </div>
  );
};

export default HeroImage;

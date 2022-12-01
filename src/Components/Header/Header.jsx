import React from "react";
import "./Header.css";
import HeroImage from "../assets/desktop/image-hero@2x.jpg";

export const Header = () => {
  return (
    <header>
      <div className="header h-50rem w-full flex flex-row header-right">
        <div className="img-left h-full bg-black"></div>
        <div className="div-mid">
          <img className="h-full max-h-full" src={HeroImage}></img>
        </div>
      </div>
      <div className="heading-xl w-full flex flex-row justify-around absolute top-custom">
        <h1 className="mix-blend-difference text-white font-black">MODERN<br></br>ART GALLERY</h1>
        <div className="flex flex-col gap-4">
          <p className="text-xl font-light max-w-xs dark-grey leading-8">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <div className="button w-56 h-20 flex flex-row justify-between items-center">
            <h2 className="text-white m-auto tracking-wide">OUR LOCATION</h2>
            <div className="button-right w-14 h-full flex justify-center items-center">
              <span className="arrow right"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

import React from "react";
import "./Footer.css";
import fb from "../assets/icon-facebook.svg";
import ig from "../assets/icon-instagram.svg";
import tw from "../assets/icon-twitter.svg";


export const Footer = () => {
  return (
    <footer>
      <div className="footer w-full h-24 bg-black mt-12 flex justify-evenly items-center">
        <h2 className="text-white">MODERN ART GALLERY</h2>
        <p className="text-white">
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>
        <div className="social flex gap-4">
          <img src={fb} className="icon"></img>
          <img src={ig} className="icon"></img>
          <img src={tw} className="icon"></img>
        </div>
      </div>
    </footer>
  );
};

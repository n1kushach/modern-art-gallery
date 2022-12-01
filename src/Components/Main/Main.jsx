import React from "react";
import "./Main.css";
import Grid1 from "../assets/desktop/image-grid-1.jpg";
import Grid2 from "../assets/desktop/image-grid-2.jpg";
import Grid3 from "../assets/desktop/image-grid-3.jpg";

export const Main = () => {
  return (
    <main>
      <div className="main flex flex-col justify-center items-center mt-16">
        <div className="wrapper">
          <div className="row1col1">
            <div className="text flex flex-col gap-6">
              <h1 className="text-top">YOUR DAY AT GALLERY</h1>
              <p className="p-top">
                Wander through our distinct collections and find new insights
                about our artists. Dive into the details of their creative
                process.
              </p>
            </div>
          </div>
          <div className="row1col2">
            <img src={Grid1}></img>
          </div>
          <div className="row23col1">
            <img src={Grid2}></img>
          </div>
          <div className="row2col2">
            <img src={Grid3}></img>
          </div>
          <div className="row3col2">
            <div className="gastile">
              <h1 className="text-bottom">COME & BE INSPIRED</h1>
              <p className="p-bottom">
                We’re excited to welcome you to our gallery and see how our
                collections influence you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

import React from "react";
import "../components/Route1.css";
import Button from "react-bootstrap/Button";

const Route1 = () => {
  return (
    <div className="about bg-dark text-light" id="about">
      <div className="container">
        <img src="" alt="john" />
        <div className="col-2">
          <h2>About</h2>
          <span className="line"></span>
          <p>
            Intense is an International Financial Planning company with offices
            i n multiple jurisdictions over the world. Working with Intense
            gives me the ability to advise internat ional expatriates living in
            the middle east from where I live in USA.
          </p>
          <p>
            I am John Doe, a senior advisor for an independently owned financial
            planning company called Intense.
          </p>
          <Button className="button">Explore More</Button>
        </div>
      </div>
    </div>
  );
};

export default Route1;

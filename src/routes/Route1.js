import React from "react";
import "../components/Route1.css";
import { Button, Image } from "react-bootstrap";

const Route1 = () => {
  return (
    <div className="about bg-dark text-light" id="about">
      <div className="container">
        <img
          src="https://previews.123rf.com/images/antoniodiaz/antoniodiaz1404/antoniodiaz140400051/27621567-young-hispanic-barber-cutting-hair-and-loving-his-work-in-a-barber-shop.jpg"
          alt="john"
          width="500"
          borderRadius="10"
        />
        <div className="column-2">
          <h2>About</h2>
          <span className="line"></span>
          <p>
            Give you that sick fade. We have been in the business for decades.
            Come by and get a fresh cut.
          </p>
          <p>Need a fresh fade? Come through.</p>
          <Button className="button">Explore More</Button>
        </div>
      </div>
    </div>
  );
};

export default Route1;

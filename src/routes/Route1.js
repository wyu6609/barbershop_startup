import React from "react";
import "../components/Route1.css";
import { Button, Image } from "react-bootstrap";

const Route1 = () => {
  return (
    <div className="about bg-dark text-light" id="about">
      <div className="container">
        <img
          src="https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg"
          alt="john"
          width="500"
          style={{ borderRadius: "10%" }}
        />
        <div className="column-2">
          <h2>About</h2>
          <span className="line"></span>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
          <Button className="button">Explore More</Button>
        </div>
      </div>
    </div>
  );
};

export default Route1;

import React from "react";
import "../components/Route2.css";
const Route2 = () => {
  return (
    <div className="testimonials  " id="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <span className="line"></span>
        <div className="content">
          <div className="card">
            <img src="" alt="user1" />
            <p>
              I stumbled on this undiscovered gem right in our neighboorhood.
              This was one of the best mouth-watering steaks I've had grace my
              taste buds in a long time. I was happy to see how clean everything
              was. The waitress was prompt and polite. Satisfactory experience,
              will come again.
            </p>
            <p>
              <span>Milo</span>
            </p>
            <p>Director of "Financial Times"</p>
          </div>
          <div className="card s">
            <img src="" alt="user1" />
            <p>
              This is one of my favorite places. The food was cooked to
              perfection. The decor was unique and incredible. After my meal, I
              was knocked into a food coma. I was happy to see how clean
              everything was. Easily earned their 5 stars!
            </p>
            <p>
              <span>Bella</span>
            </p>
            <p>Director at Risktec Solutions Ltd</p>
          </div>
          <div className="card">
            <img src="" alt="user1" />
            <p>
              My taste buds are still singing from our last visit! Everything
              was just so yummy. The experience was heavenly as I was served a
              meal fit for God himself. Easily earned their 5 stars!
            </p>
            <p>
              <span>Shadow</span>
            </p>
            <p>Managing Director of BPW Global</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Route2;

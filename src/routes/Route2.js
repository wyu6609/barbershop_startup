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
            <img
              src="https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
              alt="user1"
              height="250"
              width="350"
            />
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
            <p>Director of "Fur Times"</p>
          </div>
          <div className="card s">
            <img
              src="https://www.vmcdn.ca/f/files/via/images/animals/cat-wearing-face-mask.jpg;w=960"
              alt="user1"
              height="250"
              width="350"
            />
            <p>
              This is one of my favorite places. The food was cooked to
              perfection. The decor was unique and incredible. After my meal, I
              was knocked into a food coma. I was happy to see how clean
              everything was. Easily earned their 5 stars!
            </p>
            <p>
              <span>Bella</span>
            </p>
            <p>Director at Catech Solutions Ltd</p>
          </div>
          <div className="card">
            <img
              src="https://scitechdaily.com/images/Cat-Wearing-COVID-19-Mask.jpg"
              alt="user1"
              height="250"
              width="350"
            />
            <p>
              My taste buds are still singing from our last visit! Everything
              was just so yummy. The experience was heavenly as I was served a
              meal fit for God himself. Easily earned their 5 stars!
            </p>
            <p>
              <span>Shadow</span>
            </p>
            <p>Managing Director of PAW Global</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Route2;

import React from "react";
import "../components/Route3.css";
import { Button } from "react-bootstrap";

const Demo = () => {
  return (
    <div className="demo" id="demo">
      <div className="container">
        <div className="column-1">
          <p>More Than 100 Financial Planners,</p>
          <p>One Philosophy</p>
          <p>
            Vestibulum morbi blandit cursus risus at ultrices mi. Neque sodales
            ut etiam sit. Quis blandit turpis cursus in hac habitasse platea
            dictumst.
          </p>
          <Button className="button">Get your free financial analysis</Button>
        </div>
        <div className="column-2">
          <iframe
            width="570"
            height="320"
            src="https://www.youtube.com/embed/oeqP5JtihMA"
            title="Youtube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default Demo;

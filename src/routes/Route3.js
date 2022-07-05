import React from "react";
import "../components/Route3.css";
import { Button } from "react-bootstrap";

const Demo = () => {
  return (
    <div className="demo" id="route3">
      <div className="container">
        <div className="column-1">
          <p>Nam libero tempore, cum soluta nobis</p>
          <p>Placeat facere</p>
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
            src="https://www.youtube.com/embed/8QGMjsp8MBU"
            title="Youtube video player"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default Demo;

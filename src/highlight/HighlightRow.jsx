import "./highlight.css";
import highlightData from "./cheatcodevol9.json";
import { Fragment, useState, useEffect } from "react";

const HighlightRow = (props) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener(
      "resize",
      (event) => {
        setViewportWidth(event.target.innerWidth);

        return () => {
          window.removeEventListener("resize");
        };
      },
      [window.innerWidth]
    );
  });

  let image = highlightData.image;
  let fontSize = "1rem";

  if (viewportWidth > 500) {
    image = highlightData.imageThumbDesktop;
    fontSize = "x-large";
  }

  if (viewportWidth <= 500) {
    image = highlightData.imageThumbMobile;
    fontSize = "1rem";
  }

  const view = props.view;
  let text = (
    <Fragment>
      <span>Now Streaming:</span> <span>Cheat Code Radio vol. 9</span>
    </Fragment>
  );

  if (view === "Highlight") {
    text = (
      <Fragment>
        <button className="captchaSubmitButton">Home</button>
      </Fragment>
    );
  }
  return (
    <div className="highlightRowCardContainer">
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          
        }}
      >
        <img
          src={image}
          style={{
            borderRadius: 8,
            marginTop: "15px",
            marginBottom: "15px",
            justifySelf: "flex-start",
          }}
          className="highlightImage"
          alt="Cheat Code volume 9"
        />
      </div>
      <div style={{ width: "40%", fontSize: fontSize }}>{text}</div>
    </div>
  );
};

export default HighlightRow;

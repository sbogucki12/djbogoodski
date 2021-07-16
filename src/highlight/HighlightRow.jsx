import "./highlight.css";
import highlightData from "./cheatcodevol8.json";
import { Fragment, useState } from "react";

const HighlightRow = (props) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

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
      <span>Now Streaming:</span> <span>Cheat Code Radio vol. 8</span>
    </Fragment>
  );

  if (view === "highlight") {
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
          height: "100%",
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

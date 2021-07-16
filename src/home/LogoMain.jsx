import { Fragment } from "react";

const LogoMain = () => {
  return (
    <Fragment>
      <video autoPlay={true} muted loop={true}>
        <source
          src="https://bogoodski.blob.core.windows.net/djbogoodski/logoBG.mp4"
          type="video/mp4"
        />
      </video>
      <div className="logoTextContainer">DJ Bogoodski</div>
    </Fragment>
  );
};

export default LogoMain;

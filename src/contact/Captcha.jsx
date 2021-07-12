import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const Captcha = (props) => {
  const [captchaValues, setCaptchaValues] = useState({
    randomNumber0: Math.floor(Math.random() * 10),
    randomNumber1: Math.floor(Math.random() * 10),
    userValue: 0,
    captchaIcon: faSignInAlt,
    captchaIconStyle: null,
  });

  const solution = captchaValues.randomNumber0 + captchaValues.randomNumber1;

  const handleChange = (e) => {
    e.preventDefault();
    setCaptchaValues({
      ...captchaValues,
      userValue: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(captchaValues.userValue) === Number(solution)) {
      props.setIsCaptchaValid(true);
      setCaptchaValues({
        ...captchaValues,
        captchaIcon: faCheckCircle,
        captchaIconStyle: "contactIconBackgroundSuccessful",
      });
    } else {
      props.setIsCaptchaValid(false);
      setCaptchaValues({
        ...captchaValues,
        captchaIcon: faTimesCircle,
        captchaIconStyle: "contactIconBackgroundUnsuccessful",
      });
      setTimeout(() => {
        setCaptchaValues({
          ...captchaValues,
          captchaIcon: faSignInAlt,
        });
      }, 500);
    }
  };

  return (
    <div className="centerAlign contactCaptchaContainer">
      <div className="captchaTitle">Are you human?</div>
      <div className="captchaText">
        What is {captchaValues.randomNumber0} + {captchaValues.randomNumber1}?
      </div>
      <div className="contactCaptchaInputContainer">
        <input
          className="contactCaptchaInputField"
          value={captchaValues.userValue}
          name="captcha"
          onChange={(e) => handleChange(e)}
          type="number"
          required
        />
        <FontAwesomeIcon
          icon={captchaValues.captchaIcon}
          className={`contactIcon ${captchaValues.captchaIconStyle}`}
          onClick={(e) => handleSubmit(e)}
        />
      </div>
    </div>
  );
};

export default Captcha;

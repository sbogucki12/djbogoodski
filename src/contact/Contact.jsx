import { useState } from "react";
import Captcha from "./Captcha";
import "./contact.css";
import http from "../utility/http";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    subject: "",
    content: "",
    customerName: "",
    customerEmail: "",
    dateStamp: "",
  });
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [postResponse, setPostResponse] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (isCaptchaValid === true) {
      setPostResponse("Sending Form...");
      await http(
        `https://djbogoodskiapi.azurewebsites.net/api/SendGrid1?code=${process.env.REACT_APP_SENDGRID_KEY}`,
        //"https://jsonplaceholder.typicode.com/posts",
        "POST",
        {
          subject: formData.subject,
          content: formData.content,
          customerName: formData.customerName,
          customerEmail: formData.customerEmail,
          dateStamp: new Date().toLocaleString("en-US", {
            timeZone: "America/Los_Angeles",
          }),
        }
      ).then((data) => {
        console.log(data);
        if (data.status >= 200 || data.status < 300) {
          setPostResponse("Form submitted. Thank you.");
        } else {
          setPostResponse("This was an error submitting the form: " + data);
        }
      });
    } else {
      alert("Please complete and submit the challenge question.");
    }
  }

  return (
    <div className="contactContainer centerAlign">
      <FontAwesomeIcon icon={faEnvelope} className="contactCaptchaTitleIcon" />
      <form onSubmit={handleSubmit} className="centerAlign">
        <label className="centerAlign">
          Name:
          <input
            type="text"
            value={formData.customerName}
            name="customerName"
            onChange={(e) => handleChange(e)}
            placeholder="First Last"
            maxLength="100"
            required
            className="contactInput"
          />
        </label>
        <label className="centerAlign">
          Email:
          <input
            type="email"
            value={formData.customerEmail}
            name="customerEmail"
            onChange={(e) => handleChange(e)}
            placeholder="name@email.com"
            maxLength="320"
            className="contactInput"
            required
          />
        </label>
        <label className="centerAlign">
          Subject:
          <input
            type="text"
            value={formData.subject}
            name="subject"
            onChange={(e) => handleChange(e)}
            placeholder="Message Subject"
            maxLength="200"
            className="contactInput"
            required
          />
        </label>
        <label className="centerAlign">
          Message:
          <center>
            <textarea
              rows="4"
              cols="50"
              value={formData.content}
              name="content"
              onChange={(e) => handleChange(e)}
              placeholder="Message Content"
              maxLength="3000"
              required
              style={{ maxWidth: "90vw" }}
            />
          </center>
          <div className="contactContentLengthMessage">
            Max characters: 3000. Remaining: {3000 - formData.content.length}.
          </div>
        </label>
        <Captcha
          isCaptchaValid={isCaptchaValid}
          setIsCaptchaValid={setIsCaptchaValid}
        />
        {isCaptchaValid ? (
          <input type="submit" value="Submit" className="captchaSubmitButton" />
        ) : null}
      </form>
      <div className="captchaFormResponseText">{postResponse}</div>
    </div>
  );
};

export default Contact;

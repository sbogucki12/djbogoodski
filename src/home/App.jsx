import "./App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSoundcloud,
  faInstagram,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faIdCardAlt,
  faFileAudio,
} from "@fortawesome/free-solid-svg-icons";
import LogoMain from "./LogoMain";
import Contact from "../contact/Contact";
import Highlight from "../highlight/Highlight";
import HighlightRow from "../highlight/HighlightRow";
import About from "../about/About";
import Header from "./Header";
import Archive from "../archive/Archive";

function App() {  
  let pathname = window.location.pathname.substring(1);
  let pathNameFirstLetter = pathname.charAt(0).toUpperCase();
  let pathnameEdited = pathNameFirstLetter + pathname.substring(1);
  const [view, setView] = useState(pathnameEdited);  
  let display;  

  switch (view) {
    case "Contact":
      display = <Contact />;      
      window.history.pushState('Contact', 'Contact', '/contact');
      break;
    case "New":
      display = <Highlight />;      
      window.history.pushState('New', 'New', '/new');
      break;
    case "About":
      display = <About />;      
      window.history.pushState('About', 'About', '/about');
      break;
    case "Home":
      display = <LogoMain />;      
      window.history.pushState('Home', 'Home', '/home');
      break;
    case "Archive":
      display = <Archive />;      
      window.history.pushState('Archive', 'Archive', '/archive');
      break;
    default:
      display = <LogoMain />;      
      window.history.pushState('Home', 'Home', '/home');
  }

  const handleClick = (selectedView) => {
    setView(selectedView);
  };

  let contact = "Contact";
  let about = "About";
  let highlight = "New";
  let archive = "Archive";

  if (view === "Contact") {
    contact = "Home";
  }

  if (view === "About") {
    about = "Home";
  }

  if (view === "New") {
    highlight = "Home";
  }

  if (view === "Archive") {
    archive = "Home";
  }

  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <div className="logoRowContainer row">{display}</div>
        <a
          href="https://soundcloud.com/djbogoodski"
          target="_blank"
          rel="noreferrer noopener"
          className="buttonRightSoundCloudContainer row"
        >
          <div>
            <FontAwesomeIcon icon={faSoundcloud} className="linkIcon" />
            Soundcloud
          </div>
        </a>
        <a
          href="https://www.instagram.com/djbogoodski/"
          target="_blank"
          rel="noreferrer noopener"
          className="buttonRightInstagramContainer row"
        >
          <div>
            <FontAwesomeIcon icon={faInstagram} className="linkIcon" />
            IG
          </div>
        </a>
        <a
          href="https://www.twitch.tv/bogoodski"
          target="_blank"
          rel="noreferrer noopener"
          className="buttonRightTwitchContainer row"
        >
          <div>
            <FontAwesomeIcon icon={faTwitch} className="linkIcon" />
            Twitch
          </div>
        </a>
        <div
          className="buttonRightContactContainer row"
          onClick={() => handleClick(contact)}
        >
          <FontAwesomeIcon icon={faEnvelope} className="linkIcon" />
          {contact}
        </div>
        <div
          className="buttonRightAboutContainer row"
          onClick={() => handleClick(about)}
        >
          <FontAwesomeIcon
            icon={faIdCardAlt}
            className="linkIcon"
            style={{ color: "black" }}
          />
          {about}
        </div>
        <div
          className="buttonRightArchiveContainer row"
          onClick={() => handleClick(archive)}
        >
          <FontAwesomeIcon icon={faFileAudio} className="linkIcon" />
          {archive}
        </div>
        <div className="div10" />
        <div className="div11" />
        <div
          className="highlightRowContainer row"
          onClick={() => handleClick(highlight)}
        >
          <HighlightRow view={view} />
        </div>
        <div className="footerRowContainer">
          <i>
            Video background by{" "}
            <a
              href="https://www.pexels.com/photo/white-smoke-rising-up-forming-abstract-patterns-and-lines-3051493/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Free Creative Stuff
            </a>
          </i>
        </div>
      </div>
    </div>
  );
}

export default App;

/*<i>Video by <a href="https://www.pexels.com/video/digital-projection-of-a-planet-geometrical-symmetry-with-relation-to-outer-space-3141208/" target="_blank" rel="noreferrer noopener">Pressmaster from Pexels</a></i>*/

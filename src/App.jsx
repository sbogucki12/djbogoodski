import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSoundcloud,
  faInstagram,
  faTwitch,  
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import LogoMain from './LogoMain';
import Contact from './contact/Contact';
import Highlight from './highlight/Highlight';
import HighlightRow from './highlight/HighlightRow';

function App() {  
  const [ view, setView] = useState("home");

  let display; 

  switch(view) {
    case 'contact':
      display = <Contact />
    break
    case 'highlight':
      display = <Highlight />
    break   
    default:
      display = <LogoMain />
  }

  const handleContactClick = () => {
    if(view === "contact"){
      setView("home");
    } else setView("contact")
  }

  const handleHighlightClick = () => {
    if(view === "highlight"){
      setView("home");
    } else setView("highlight")
  }

  return (
    <div className="container">
      <div className="logoRowContainer row">
        {display}
      </div>     
      <div className="buttonRightSoundCloudContainer row"><FontAwesomeIcon icon={faSoundcloud} />Soundcloud</div>
      <div className="buttonRightInstagramContainer row"><FontAwesomeIcon icon={faInstagram} />IG</div>
      <div className="buttonRightTwitchContainer row"><FontAwesomeIcon icon={faTwitch} />Twitch</div>
      <div className="buttonRightContactContainer row" onClick={() => handleContactClick()}><FontAwesomeIcon icon={faEnvelope} />Contact</div>
      <div className="div8" />
      <div className="div9" />
      <div className="div10" />
      <div className="div11" />
      <div className="highlightRowContainer row" onClick={() => handleHighlightClick()}>
        <HighlightRow />
      </div>
      <div className="footerRowContainer"><i>Video by <a href="https://www.pexels.com/photo/white-smoke-rising-up-forming-abstract-patterns-and-lines-3051493/" target="_blank" rel="noreferrer noopener">Free Creative Stuff</a></i></div>
    </div>
  );
}

export default App;


/*<i>Video by <a href="https://www.pexels.com/video/digital-projection-of-a-planet-geometrical-symmetry-with-relation-to-outer-space-3141208/" target="_blank" rel="noreferrer noopener">Pressmaster from Pexels</a></i>*/
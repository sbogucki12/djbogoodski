import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSoundcloud,
  faInstagram,
  faTwitch,  
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import LogoMain from './LogoMain';
import Contact from './contact/Contact';

function App() {
  const [ showContact, setShowContact] = useState(false);

  let view = <LogoMain />;

  showContact ? view = <Contact /> : view = <LogoMain/>;  
  return (
    <div className="App container">
      <div className="logoContainer row">
        {view}
      </div>     
      <div className="buttonRightSoundCloudContainer row"><FontAwesomeIcon icon={faSoundcloud} />Soundcloud</div>
      <div className="buttonRightInstagramContainer row"><FontAwesomeIcon icon={faInstagram} />IG</div>
      <div className="buttonRightTwitchContainer row"><FontAwesomeIcon icon={faTwitch} />Twitch</div>
      <div className="buttonRightContactContainer row" onClick={() => setShowContact(!showContact)}><FontAwesomeIcon icon={faEnvelope} />Contact</div>
      <div className="footerContainer"><i>Video by <a href="https://www.pexels.com/video/digital-projection-of-a-planet-geometrical-symmetry-with-relation-to-outer-space-3141208/" target="_blank" rel="noreferrer noopener">Pressmaster from Pexels</a></i></div>
    </div>
  );
}

export default App;

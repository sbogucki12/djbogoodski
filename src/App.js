import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSoundcloud,
  faInstagram,
  faTwitch,  
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App container">
      <div className="logoContainer row">        
          <video autoPlay={true} muted loop={true}>
            <source src="/assets/logoBG.mp4" type="video/mp4" />
          </video>
          <div className="logoTextContainer">
            DJ BoGoodSki  
          </div>        
      </div>
      <div className="buttonRightSoundCloudContainer row"><FontAwesomeIcon icon={faSoundcloud} />Soundcloud</div>
      <div className="buttonRightInstagramContainer row"><FontAwesomeIcon icon={faInstagram} />IG</div>
      <div className="buttonRightTwitchContainer row"><FontAwesomeIcon icon={faTwitch} />Twitch</div>
      <div className="buttonRightContactContainer row"><FontAwesomeIcon icon={faEnvelope} />Contact</div>
      <div className="footerContainer"><i>Video by <a href="https://www.pexels.com/video/digital-projection-of-a-planet-geometrical-symmetry-with-relation-to-outer-space-3141208/" target="_blank" rel="noreferrer noopener">Pressmaster from Pexels</a></i></div>
    </div>
  );
}

export default App;

import './App.css';

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
      <div className="buttonRightSoundCloudContainer row">Soundcloud</div>
      <div className="buttonRightInstagramContainer row">IG</div>
      <div className="buttonRightTwitchContainer row">Twitch</div>
      <div className="buttonRightContactContainer row">Contact</div>
      <div className="footerContainer"><i>Video by <a href="https://www.pexels.com/video/digital-projection-of-a-planet-geometrical-symmetry-with-relation-to-outer-space-3141208/" target="_blank" rel="noreferrer noopener">Pressmaster from Pexels</a></i></div>
    </div>
  );
}

export default App;

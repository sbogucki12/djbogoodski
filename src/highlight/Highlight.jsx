import highlightData from "./cheatcodevol8.json";
import "./highlight.css";

const Highlight = () => {
  const tracks = highlightData.tracks.map((track) => (
    <li key={track.id}>
      {track.time} {track.artist} - {track.title}
    </li>
  ));

  return (
    <div className="highlightContainer">
      <h1 className="highlightTitleText">{highlightData.title}</h1>
      <img
        src={highlightData.image}
        style={{ width: 250, height: "70%", borderRadius: 8 }}
        className="highlightImage"
        alt="Cheat Code volume 8"
      />
      <iframe
        title="Cheat Code Radio Volume 8 on SoundCloud"
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        style={{ marginTop: "20px" }}
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1067778601&color=%23985e6d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div
        style={{
          fontSize: 10,
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
          fontWeight: 100,
        }}
      >
        <a
          href="https://soundcloud.com/djbogoodski"
          title="IG: DJBoGoodSki"
          target="_blank"
          rel="noreferrer noopener"
          style={{
            color: "#cccccc",
            textDecoration: "none",
            marginBottom: "20px",
          }}
        >
          IG: DJBoGoodSki
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/djbogoodski/cheat-code-radio-vol-8"
          title="Cheat Code Radio Vol. 8"
          target="_blank"
          rel="noreferrer noopener"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          Cheat Code Radio Vol. 8
        </a>
      </div>
      <div className="highlightTracksContainer">
        <ul>{tracks}</ul>
      </div>
    </div>
  );
};

export default Highlight;

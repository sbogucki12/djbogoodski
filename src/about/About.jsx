import "./about.css";
import PictureGrid from "./PictureGrid";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutTitleContainer">DJ Bogoodski</div>
      <div className="aboutTextContainer">
        <p>
          Bogoodski is a hobbyist DJ, mixing live from living rooms in southern
          California.
        </p>
        <p>
          He is also a{" "}
          <a
            href="https://www.linkedin.com/in/sbogucki12/"
            target="_blank"
            rel="noreferrer noopener"
          >
            professional technologist
          </a>
          , working as a{" "}
          <a
            href="https://github.com/sbogucki12"
            target="_blank"
            rel="noreferrer noopener"
          >
            software developer
          </a>
          , solutions architect, and manager.
        </p>
        <p>
          Also, a runner. 🏃‍♂️ His #runstreak, dating to 2017, can be followed at{" "}
          <a
            href="https://www.dailyrun.net/"
            target="_blank"
            rel="noreferrer noopener"
          >
            www.DailyRun.net
          </a>{" "}
          and on{" "}
          <a
            href="https://www.instagram.com/bogoodskiruns/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Instagram
          </a>
          .
        </p>
        <p>
          Bogoodski's passion for electronic music began in the early 2000s; his
          listening then dominated by classic trance, including Tiesto and Aly &
          Fila.
        </p>
        <p>
          A listener to the{" "}
          <a
            href="https://www.markusschulz.com/radio/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Global DJ Broadcast
          </a>{" "}
          since program inception, the Markus Schulz radio show introduced
          Bogoodski to Eric Prydz. 🙌
        </p>
        <p>
          And Eric Prydz led to the discovery of Bogoodsk's current favorite
          producer,{" "}
          <a
            href="https://soundcloud.com/cristophmusic"
            target="_blank"
            rel="noreferrer noopener"
          >
            Cristoph
          </a>
          .
        </p>
        <p>
          <b>All-Time Favorite Set?</b>
        </p>
        <p>
          <a
            href="https://youtu.be/MrVE6He0FPM"
            target="_blank"
            rel="noreferrer nopener"
          >
            Markus Schulz - ASOT 500 in Buenos Aires.
          </a>
        </p>
        <p>
          Bogoodski's mixes include house, progressive, techno, and trance.
          Classic and new. Always mixed live.
        </p>
      </div>
      <div>
        <PictureGrid />
      </div>
    </div>
  );
};

export default About;

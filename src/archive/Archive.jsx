import "./achive.css";
import archiveData from "./archiveIndex.json";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Archive = () => {
  const currentEpisode = archiveData.data[0];

  const [selectedEpisode, setSelectedEpisode] = useState({
    id: currentEpisode.id,
    date: currentEpisode.date,
    series: currentEpisode.series,
    episode: currentEpisode.episode,
    soundCloudTrackNumber: currentEpisode.soundCloudTrackNumber,
  });

  const handleSelect = (event) => {
    const episode = archiveData.data[event.target.value];
    setSelectedEpisode({
      ...episode,
    });
  };

  const achiveIndexValues = archiveData.data.map((value) => (
    <option
      key={value.id}
      value={value.id}
      onSelect={(value) => handleSelect(value)}
    >
      {value.date} - {value.series}: {value.episode}
    </option>
  ));

  return (
    <div className="archiveComponentContainer">
      <div>
        <div className="archiveSelectionContainer">
          <FontAwesomeIcon icon={faArrowRight} className="linkIcon" />
          <label htmlFor="episodes">
            <b>Choose Episode:</b>{" "}
          </label>
          <select
            name="episodes"
            id="episodes"
            value={selectedEpisode}
            onChange={(e) => handleSelect(e)}
          >
            <option>
              {selectedEpisode.date} - {selectedEpisode.series}:{" "}
              {selectedEpisode.episode}
            </option>
            {achiveIndexValues}
          </select>
        </div>
        <div className="archiveTitleContainer">
          <div className="archiveCurrentEpisodeTitleContainer">
            <h1 className="archiveCurrentEpisodeSeriesTitle">
              {selectedEpisode.series}
            </h1>
            <h4 className="archiveCurrentEpisodeEpisodeTitle">
              {selectedEpisode.episode}
            </h4>
          </div>
        </div>
        <div>
          <iframe
            title={`${selectedEpisode.series}: ${selectedEpisode.episode}`}
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            style={{
              marginTop: "20px",
              boxShadow: "0px 0px 10px 3px var(--secondary)",
              border: "1px solid var(--primary)",
            }}
            src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${selectedEpisode.soundCloudTrackNumber}&color=%23985e6d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
          ></iframe>
          <p>
            <i>{selectedEpisode.date}</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Archive;

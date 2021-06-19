import highlightData from './cheatcodevol8.json';
import './highlight.css';
import { Image } from 'rebass';

const Highlight = () => {
	const tracks = highlightData.tracks.map((track) => (
		<li key={track.id}>
			{track.time} {track.artist} - {track.title}
		</li>
	));
	return (
		<div className="highlightContainer">
			<h1>{highlightData.title}</h1>
			<Image src={highlightData.image} sx={{ width: 250, height: '70%', borderRadius: 8 }} className="highlightImage" />
			<p>
				<a href={highlightData.link}>Listen Now!</a>
			</p>
			<ul>{tracks}</ul>
		</div>
	);
};

export default Highlight;

import highlightData from './cheatcodevol8.json';
import './highlight.css';
import http from '../utility/http';

const Highlight = () => {
	const tracks = highlightData.tracks.map((track) => (
		<li key={track.id}>
			{track.time} {track.artist} - {track.title}
		</li>
	));

	const handleClick = () => {
		http('https://djbogoodskiapi.azurewebsites.net/api/sendEmail?code=' + process.env.REACT_APP_REPLACEINPRODUCTION_SendGrid, 'POST', {
			"subject": "This is from development.",
			"content": "Proin hendrerit aliquet neque, sit amet tempor urna ultrices sit amet. Vivamus scelerisque eros dui, et sagittis massa rhoncus ac. Nulla maximus risus rhoncus vestibulum lobortis. Fusce cursus justo quis diam ullamcorper porttitor. Donec non porta augue, nec vestibulum libero. Vivamus finibus, lectus et pretium tempus, arcu augue lacinia ex, cursus vestibulum dolor velit vel mauris. Integer rhoncus lacinia sollicitudin. Aenean auctor sapien vel euismod molestie. Morbi velit velit, faucibus in ante id, pretium molestie odio. Sed ultricies eros varius arcu euismod mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris quis justo sit amet est consectetur aliquet. Quisque bibendum pellentesque turpis, sed porta diam bibendum non. Nullam eget rhoncus diam.",
			"customerName": "Steve B.",
			"customerEmail": "email@email.com"
		  } ).then(data => console.log(data))
	}
	return (
		<div className="highlightContainer">
			<h1>{highlightData.title}</h1>
			<img src={highlightData.image} style={{ width: 250, height: '70%', borderRadius: 8 }} className="highlightImage" alt="Cheat Code volume 8"/>
			<p>
				<a href={highlightData.link}>Listen Now!</a>
			</p>
			<ul>{tracks}</ul>
			<button onClick={() => handleClick()}>TEST</button>
		</div>
	);
};

export default Highlight;

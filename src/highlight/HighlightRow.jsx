import './highlight.css';
import highlightData from './cheatcodevol8.json';
import { Fragment } from 'react';

const HighlightRow = (props) => {
	const view = props.view; 
	let text = <Fragment><span>Now Streaming:</span> <span>Cheat Code Radio vol. 8</span></Fragment>;

	if(view === "highlight"){
		text = <Fragment><button className="captchaSubmitButton">Home</button></Fragment>
	}
	return (
		<div className="highlightRowCardContainer">
			<div>
				<img
					src={highlightData.image}
					style={{ width: '15vw', height: '17vh', borderRadius: 8, marginTop: '7%' }}
					className="highlightImage"                    
					alt="Cheat Code volume 9"
				/>
			</div>
			<div>{text}</div>
		</div>
	);
};

export default HighlightRow;

import './highlight.css';
import highlightData from './cheatcodevol8.json';

const HighlightRow = () => {
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
			<div>Cheat Code Radio vol. 8</div>
		</div>
	);
};

export default HighlightRow;

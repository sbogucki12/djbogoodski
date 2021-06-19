import './highlight.css';
import { Image } from 'rebass';
import highlightData from './cheatcodevol8.json';

const HighlightRow = () => {
	return (
		<div className="highlightRowCardContainer">
			<div>
				<Image
					src={highlightData.image}
					sx={{ width: '15vw', height: '17vh', borderRadius: 8 }}
					className="highlightImage"
                    style={{marginTop: '7%'}}
				/>
			</div>
			<div>Cheat Code Radio vol. 8</div>
		</div>
	);
};

export default HighlightRow;

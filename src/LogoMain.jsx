import { Fragment } from 'react';

const LogoMain = () => {
	return (
		<Fragment>
			<video autoPlay={true} muted loop={true}>
				<source src="/assets/logoBG.mp4" type="video/mp4" />
			</video>
			<div className="logoTextContainer">DJ BoGoodSki</div>
		</Fragment>
	);
};

export default LogoMain;

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Captcha = (props) => {
	const [captchaValues, setCaptchaValues] = useState({
		randomNumber0: Math.floor(Math.random() * 10),
		randomNumber1: Math.floor(Math.random() * 10),
		userValue: 0,
		captchaIcon: faSignInAlt
	});

	const solution = captchaValues.randomNumber0 + captchaValues.randomNumber1;

	const handleChange = (e) => {
		e.preventDefault();
		setCaptchaValues({
			...captchaValues,
			userValue: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		console.log(solution);
		e.preventDefault();
		if (captchaValues.userValue == solution) {
			props.setIsCaptchaValid(true);
			setCaptchaValues({
				...captchaValues,
				captchaIcon: faCheckCircle
			})
		} else {
			props.setIsCaptchaValid(false);
			setCaptchaValues({
				...captchaValues,
				captchaIcon: faTimesCircle
			})
			setTimeout(() => {
				setCaptchaValues({
					...captchaValues, 
					captchaIcon: faSignInAlt
				})
			}, 1000)
		}
	};

	return (
		<div className="centerAlign">
			<p>Are you human?</p>
			<p>
				What is {captchaValues.randomNumber0} + {captchaValues.randomNumber1}?
			</p>
			<div class="input-container">
				
				<input
					class="input-field"
					value={captchaValues.userValue}
					name="captcha"
					onChange={(e) => handleChange(e)}
				/>
				<FontAwesomeIcon icon={captchaValues.captchaIcon} className="icon" onClick={(e) => handleSubmit(e)} />
			</div>
		</div>
	);
};

export default Captcha;

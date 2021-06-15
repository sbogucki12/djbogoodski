import { useState } from 'react';

const Captcha = (props) => {
	const [captchaValues, setCaptchaValues] = useState({
        randomNumber0: Math.floor(Math.random() * 10),
        randomNumber1: Math.floor(Math.random() * 10),
        userValue: 0
    });

    const solution = captchaValues.randomNumber0 + captchaValues.randomNumber1;
	
	const handleChange = (e) => {
		e.preventDefault();
		setCaptchaValues({
            ...captchaValues, 
            userValue: e.target.value
        });
	};

	const handleSubmit = (e) => {
        console.log(solution)
		e.preventDefault();
		if (captchaValues.userValue == solution) {
			props.setIsCaptchaValid(true); 			
		} else props.setIsCaptchaValid(false);
	};

	return (
		<div className="centerAlign">
			<p>Are you human?</p>
			<p>
				What is {captchaValues.randomNumber0} + {captchaValues.randomNumber1}?
			</p>
			<input type="text" value={captchaValues.userValue} name="captcha" onChange={(e) => handleChange(e)} />

			<button onClick={(e) => handleSubmit(e)}>Submit</button>
			<p>
				{props.isCaptchaValid ? `Good!` : `X`}
			</p>
		</div>
	);
};

export default Captcha;

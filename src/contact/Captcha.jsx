import { useState } from 'react';

const Captcha = () => {
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
			alert(true);
		} else alert(false);
	};

	return (
		<div className="centerAlign">
			<p>Are you human?</p>
			<p>
				What is {captchaValues.randomNumber0} + {captchaValues.randomNumber1}?
			</p>
			<input type="text" value={captchaValues.userValue} name="captcha" onChange={(e) => handleChange(e)} />

			<button onClick={(e) => handleSubmit(e)}>Submit</button>
		</div>
	);
};

export default Captcha;

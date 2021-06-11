import { useState } from 'react';
import Captcha from './Captcha';
import './contact.css';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	}); 
	const [isCaptchaValid, setIsCaptchaValid] = useState(false);

	const handleSubmit = (e) => {
        e.preventDefault();
		console.log(formData);
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div className="contactContainer">
			<form onSubmit={handleSubmit} className="centerAlign">
				<label className="centerAlign">
					Name:
					<input type="text" value={formData.name} name="name" onChange={(e) => handleChange(e)} />
				</label>
				<Captcha isCaptchaValid={isCaptchaValid} />
				{/*<input type="submit" value="Submit" />*/}
			</form>
		</div>
	);
};

export default Contact;

import { useState } from 'react';
import Captcha from './Captcha';
import './contact.css';
import http from '../utility/http';

const Contact = () => {
	const [formData, setFormData] = useState({
		subject: 'This is a test from development - local host',
		content: 'Hi. I hope this works.',
		customerName: 'Steve B',
		customerEmail: 'test@test.com',
		dateStamp: '09 July2021 08:57',
	});
	const [isCaptchaValid, setIsCaptchaValid] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(isCaptchaValid);
	};

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleClick = () => {
		http(
			'https://djbogoodskiapi.azurewebsites.net/api/SendGrid1?code=' + process.env.REACT_APP_SENDGRID_KEY,
			'POST',
			{
				subject: formData.subject,
				content: formData.content,
				customerName: formData.customerName,
				customerEmail: formData.customerEmail,
			}
		).then((data) => console.log(data));
	};

	return (
		<div className="contactContainer">
			<form onSubmit={handleSubmit} className="centerAlign">
				<label className="centerAlign">
					Name:
					<input
						type="text"
						value={formData.customerName}
						name="customerName"
						onChange={(e) => handleChange(e)}
					/>
				</label>
				<label className="centerAlign">
					Email:
					<input
						type="email"
						value={formData.customerEmail}
						name="customerEmail"
						onChange={(e) => handleChange(e)}
					/>
				</label>
				<label className="centerAlign">
					Subject:
					<input type="text" value={formData.subject} name="subject" onChange={(e) => handleChange(e)} />
				</label>
				<label className="centerAlign">
					Message:
					<input type="text" value={formData.content} name="content" onChange={(e) => handleChange(e)} />
				</label>
				<Captcha isCaptchaValid={isCaptchaValid} setIsCaptchaValid={setIsCaptchaValid} />
				<input type="submit" value="Submit" />
			</form>
			<button onClick={() => handleClick()}>TEST</button>
		</div>
	);
};

export default Contact;

import React, { useState } from 'react'
import SectionTitle from '../SectionTitle'
import './contact.css'
import emailjs from "emailjs-com";
const ContactForm = () => {

	const [details, setDetails] = useState({
		firstName: '',
		lastName: '',
		email: '',
		msg: ''
	});

	const handleForm = (e) => {
		const { name, value } = e.target;
		setDetails({
			...details,
			[name]: value,
		});

	};

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs.sendForm('service_gj74xgk','template_2879a4d',e.target,"p27Tr5DTOxMV5aYTK");
	}
	return (
		<section id='contact' data-aos="fade"
			data-aos-delay="100"
			data-aos-duration="500"
			data-aos-easing="ease-out"
			data-aos-mirror="true"
			data-aos-once="false">
			<SectionTitle title='Contact Us' />
			<form onSubmit={handleSubmit}>
				<section className='contact_form_wrap'>
					<div className="contact_form">
						<div className='contact_wrapper'>
							<div className="contact_left">
								<input
									className='contact_input'
									name='firstName'
									onChange={handleForm}
									value={details.firstName}
									type="text"
									placeholder='First Name' />
								<input
									className='contact_input'
									name='lastName'
									onChange={handleForm}
									value={details.lastName}
									type="text"
									placeholder='Last Name' />
								<input
									className='contact_input'
									name='email'
									onChange={handleForm}
									value={details.email}
									type="email"
									placeholder='Email' />
							</div>
							<div className="contact_right">
								<textarea
									rows='6'
									name='msg'
									value={details.msg}
									onChange={handleForm}
									className='contact_textarea'
									placeholder='Message' />
							</div>
						</div>
						<div className='contact_btn_box'>
							<button
								className='contact_btn'
	
							>
								Submit
							</button>
						</div>
					</div>
				</section>
			</form>
			<h2 className='foot_text'>Designed and Developed by <span>Developers and Coders Club, NITA</span></h2>
		</section>
	)
}

export default ContactForm
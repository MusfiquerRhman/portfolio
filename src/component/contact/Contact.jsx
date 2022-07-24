import React, { useRef, useEffect, useContext, useState } from 'react'
import useOnScreen from '../../hooks/useOnScreen'
import { InteractionContext } from '../../context APIs/interactionAPI'
import { ThemeContextAPI } from '../../context APIs/themeContextAPI'
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp } from 'react-icons/bs'
import { SiMessenger } from 'react-icons/si'
import { HiArrowRight } from 'react-icons/hi'
import {GlobalStyles} from './contactStyle.js'
import emailjs from '@emailjs/browser';
import { useSnackbar } from 'notistack';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

// import AppWrap from '../../wrapers/AppWrap'

const Contact = () => {
	const { setInView } = useContext(InteractionContext);
	const {theme} = useContext(ThemeContextAPI);
	const [setRef, visible] = useOnScreen({ threshold: 0.7 });
	const [buttonText, setButtonText] = useState(('Send Message'));
	const [sendButtonIcon, setSendButtonIcon] = useState(<ForwardToInboxIcon className='icon'/>);
	const [inputBorderClass, setInputBorderClass] = useState("");

	useEffect(() => {
		const className = theme === 'light' ? 'border' : '';
		setInputBorderClass(className);
	}, [theme])

	useEffect(() => {
		if (visible) {
			setInView('#contact')
		}
	}, [setInView, setRef, visible])

	const form = useRef();
	const { enqueueSnackbar } = useSnackbar();

	const sendEmail = (e) => {
		e.preventDefault();
		enqueueSnackbar("Sending Message...", {variant: 'info'})
		setButtonText('Sending...')
		setSendButtonIcon(<ScheduleSendIcon className='icon'/>);

		emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE, process.env.REACT_APP_EMAIL_TEMPLETE, form.current, process.env.REACT_APP_USER_ID).then((result) => {
			if(result.status === 200){
				enqueueSnackbar("Message sent, Thanks for connecting", {variant: 'success'});
				setButtonText('Message Sent!');
				setSendButtonIcon(<MarkEmailReadIcon className='icon'/>);
				setTimeout(() => {
					setButtonText("Send Another Message!")
				}, 5000)
			}
		}, (error) => {
			enqueueSnackbar("Failed to send message!", {variant: 'error'});
			setButtonText('Failed!');
		});

		e.target.reset();
	};

	return (
		<>
			<GlobalStyles />
			<section id='contact' ref={setRef}>
				<h5>Get In Touch</h5>
				<h2>Contact ME</h2>

				<div className="container contact__container">
					<div className="contact__options">
						<article className='contact__option'>
							<AiOutlineMail className='contact__options-icon' />
							<h4>Email</h4>
							<h5>musfiquerrhman@gmail.com</h5>
							<a href="mailto:musfiquerrhman@gmail.com" target='_blank' rel="noreferrer"> <HiArrowRight className='icon' /> Send a Message </a>
						</article>
						<article className='contact__option'>
							<SiMessenger className='contact__options-icon' />
							<h4>Facebook</h4>
							<h5>Musfiquer Rhman</h5>
							<a href="https://www.facebook.com/messages/t/100008104236206" target='_blank' rel="noreferrer"> <HiArrowRight className='icon' /> Send a Message </a>
						</article>
						<article className='contact__option'>
							<BsWhatsapp className='contact__options-icon' />
							<h4>Whatsapp</h4>
							<h5>Musfiquer Rhman</h5>
							<a href="https://api.whatsapp.com/send?phone=+8801959793534" target='_blank' rel="noreferrer"><HiArrowRight className='icon' /> Send a Message </a>
						</article>
					</div>

					<form ref={form}>
						<input type="text" name="name" id="name" placeholder='Your Full Name' className={inputBorderClass} required />
						<input type="email" name='email' id='email' placeholder='Your Email' className={inputBorderClass} required />
						<textarea name="message" id="message" cols="30" rows="10" placeholder='Message' className={inputBorderClass} required></textarea>
						<a type='submit' className='btn btn-primary' onClick={sendEmail}>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							{sendButtonIcon} {buttonText}
						</a>
					</form>
				</div>
			</section>
		</>
	)
}

export default Contact
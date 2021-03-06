import React from 'react'
import {GlobalStyles} from './footerStyle'
import {FaGithubSquare, FaFacebookSquare} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
	return (
		<React.Fragment>
			<GlobalStyles />
			<footer className=''>
			<a href='#header' className='footer__logo'>Musfiquer Rhman</a>

			<div className='footer__social'>
				<a href='https://github.com/MusfiquerRhman' target='_blank' rel="noreferrer" ><FaGithubSquare /></a>
				<a href='https://www.linkedin.com/in/musfiquer-rhman-ba2a02172/' target='_blank' rel="noreferrer" ><BsLinkedin /></a>
				<a href='https://www.facebook.com/musfiquerrhman' target='_blank' rel="noreferrer" ><FaFacebookSquare /></a>
			</div>
		</footer>
		</React.Fragment>
	)
}

export default Footer
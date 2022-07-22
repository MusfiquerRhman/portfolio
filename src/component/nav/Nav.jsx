import React, {useState, useEffect, useContext} from 'react'
import {GlobalStyles} from './navStyle'
import {BsTools} from 'react-icons/bs'
import {AiOutlineMessage, AiOutlineUser, AiOutlineHome, AiOutlinePhone} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import { InteractionContext } from '../../context APIs/interactionAPI'

const Nav = () => {
	const [isActive, setIsActive] = useState('#header');	
	const {inView} = useContext(InteractionContext);

	useEffect(() => {
		setIsActive(inView)
	}, [inView])

	return (
		<>
			<GlobalStyles />
			<nav>
				<a href="#header" className={isActive === '#header' ? 'active' : ''}><AiOutlineHome /></a>
				<a href="#about" className={isActive === '#about' ? 'active' : ''}><AiOutlineUser /></a>
				<a href="#experience" className={isActive === '#experience' ? 'active' : ''}><BiBook /></a>
				<a href='#portfolio' className={isActive === '#portfolio' ? 'active' : ''}><BsTools /></a>
				<a href='#testimonial' className={isActive === '#testimonial' ? 'active' : ''}><AiOutlineMessage /></a>
				<a href='#contact' className={isActive === '#contact' ? 'active' : ''}><AiOutlinePhone /></a>
			</nav>
		</>
	)
}

export default Nav
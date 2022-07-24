import React, {useContext, useEffect} from 'react'
import { GlobalStyles } from './headerStyles'
import CTA from './CTA'
import ME from '../../assests/hackerman.png'
import HeaderSocials from './headerSocials'
import useOnScreen from '../../hooks/useOnScreen'
import { InteractionContext } from '../../context APIs/interactionAPI'
import Toggle from './themeToggle'


const Header = () => {
	const {setInView} = useContext(InteractionContext);
    const [setRef, visible] = useOnScreen({threshold: 0.7});

    useEffect(() => {
        if(visible){
            setInView('#header')
        }
    }, [setRef, visible])


    return (
		<>
		<GlobalStyles/>
		<header id='header' ref={setRef}>
			<div className="container header__container">
				<h5>Hello, I am</h5>
				<h1>Musfiquer Rhman</h1>
				<h5 className="text-light">Fullstack Developer</h5>	
				<CTA />
				<HeaderSocials />

				<div className='me'>
					<img src={ME} alt='me' />
				</div>

				<Toggle />
			</div>
		</header>
	</>
    )
}

export default Header
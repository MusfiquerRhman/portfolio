import React, {useEffect, useContext} from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import './experience.scss'
import useOnScreen from '../../hooks/useOnScreen'
import { InteractionContext } from '../../context APIs/interactionAPI'

const Experience = () => {
	const {setInView} = useContext(InteractionContext);
    const [setRef, visible] = useOnScreen({threshold: 0.7});

    useEffect(() => {
        if(visible){
            setInView('#experience')
        }
    }, [setRef, visible])


	return (
		<section id='experience' ref={setRef}>
			<h5>What Skills I have</h5>
			<h2>My Experience</h2>

			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>Web develpment</h3>
					<div className="experience__content">
						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icons' />
							<div>
								<h4>HTML</h4>
								<small className='text-light'>Experienced</small>
							</div>
						</article>

						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icons' />
							<div>
								<h4>CSS</h4>
								<small className='text-light'>Intermediet</small>
							</div>
						</article>

						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icons' />
							<div>
								<h4>Javascript</h4>
								<small className='text-light'>Intermediet</small>
							</div>
						</article>

						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icons' />
							<div>
								<h4>React.js</h4>
								<small className='text-light'>Intermediet</small>
							</div>
						</article>

						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icons' />
							<div>
								<h4>Material UI</h4>
								<small className='text-light'>Intermediet</small>
							</div>
						</article>

						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icons' />
							<div>
								<h4>Node.js</h4>
								<small className='text-light'>Intermediet</small>
							</div>
						</article>
					</div>
				</div>

				<div className="experience__frontend">
					<h3>Other Skills</h3>
					<div className="experience__content">
						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icons' />
							<div>
								<h4>MySQL</h4>
								<small className='text-light'>Intermediet</small>
							</div>
						</article>

						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icons' />
							<div>
								<h4>MongoDB</h4>
								<small className='text-light'>Intermediet</small>
							</div>
						</article>

						{/* <article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icons' />
							<div>
								<h4>React native</h4>
								<small className='text-light'>Intermediet</small>
							</div>
						</article> */}

						<article className='experience__details'>
							<BsFillPatchCheckFill className='experience__details-icons' />
							<div>
								<h4>SCSS</h4>
								<small className='text-light'>Intermediet</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience
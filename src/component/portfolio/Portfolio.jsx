import React, { useState, useEffect, useContext } from 'react'
import useOnScreen from '../../hooks/useOnScreen'
import { InteractionContext } from '../../context APIs/interactionAPI'
import './portfolio.scss'
import about01 from '../../assests/about01.png'
import about02 from '../../assests/about02.png'
import about03 from '../../assests/about03.png'
import about04 from '../../assests/about04.png'

const data = [
	{
		id: 1,
		image: about01,
		title: "Medical Drug Marketing",
		github: "http://www.github.com",
		liveDemo: "http://www.github.com",
		tags: ['Nodejs', 'All'],
	}, {
		id: 2,
		image: about02,
		title: "Medical Drug Marketing",
		github: "http://www.github.com",
		liveDemo: "http://www.github.com",
		tags: ['React JS', 'All'],
	}, {
		id: 3,
		image: about03,
		title: "Medical Drug Marketing",
		github: "http://www.github.com",
		liveDemo: "http://www.github.com",
		tags: ['Mobile App', 'Machine Learning', 'All'],
	}, {
		id: 4,
		image: about04,
		title: "Medical Drug Marketing",
		github: "http://www.github.com",
		liveDemo: "http://www.github.com",
		tags: ['Machine Learning', 'All'],
	},
]

const Portfolio = () => {
	const [works, setWorks] = useState(data);
	const [filterWork, setFilterWork] = useState([]);
	const [activeFilter, setActiveFilter] = useState('All');
	const {setInView} = useContext(InteractionContext);
    const [setRef, visible] = useOnScreen({threshold: 0.7});

    useEffect(() => {
        if(visible){
            setInView('#portfolio')
        }
    }, [setRef, visible])


	useEffect(() => {
		setFilterWork(data);
	}, [works]);

	const handleWorkFilter = (item) => {
		setActiveFilter(item);
		setFilterWork(works.filter((work) => work.tags.includes(item)));
	};

	return (
		<section id='portfolio' ref={setRef}>
			<h5>My Recent Works</h5>
			<h2>Portfolio</h2>

			<h5>Categories</h5>
			<div className="portfolio__filter">
				{['React JS', 'Nodejs', 'UI/UX', 'Machine Learning', 'Mobile App', 'All'].map((item, index) => (
					<div
						key={index}
						onClick={() => handleWorkFilter(item)}
						className={`portfolio__filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
					>
						{item}
					</div>
				))}
			</div>

			<div className="container portfolio__container">
				{filterWork.map((item, index) => (
					<article className='portfolio__item' key={index}>
						<div className="portfolio__item-image">
							<img src={item.image} alt="" />
							<div className="portfolio__item-cta">
							<a href={item.github} className='btn' target='_blank' rel="noreferrer">
								Github
							</a>
							<a href={item.liveDemo} className='btn' target='_blank' rel="noreferrer">
								Live Demo
							</a>
						</div>
						</div>
						<div className='portfolio__item-description'>
							<h5 className='portfolio__item-tag'>{item.tags[0]}</h5>
							<h3 className='portfolio__item-title'>{item.title}</h3>
						</div>
					</article>
				))}
			</div>
		</section>
	)
}

export default Portfolio
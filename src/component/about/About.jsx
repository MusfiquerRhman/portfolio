import React, {useEffect, useState, useContext} from 'react'
import './about.scss'
import ME from '../../assests/about.webp'
import {BsClockHistory, BsPeopleFill, BsJournalText} from 'react-icons/bs'
import {GoRocket} from 'react-icons/go'
import useOnScreen from '../../hooks/useOnScreen'
import { InteractionContext } from '../../context APIs/interactionAPI'


const About = () => {
    const {setInView} = useContext(InteractionContext);
    const [setRef, visible] = useOnScreen({threshold: 0.7});

    useEffect(() => {
        if(visible){
            setInView('#about')
        }
    }, [setRef, visible])

    return (
        <section id='about' ref={setRef}>
            <h5>Get to know</h5> 
            <h2>About Me</h2>   

            <div className='container about__container'>
                <div className='about__me'>
                    <div className="about__me-image">
                        <img src={ME} alt="me" />                    
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <BsClockHistory className='about__icon'/>
                            <h5>Experience</h5>
                            <small>3+ years of Experience</small>
                        </article>    
                        <article className='about__card'>
                            <BsPeopleFill className='about__icon'/>
                            <h5>Clients</h5>
                            <small>Be the first one!</small>
                        </article> 
                        <article className='about__card'>
                            <GoRocket className='about__icon'/>
                            <h5>Projects</h5>
                            <small>10+ projects</small>
                        </article> 
                        <article className='about__card'>
                            <BsJournalText className='about__icon'/>
                            <h5>Publications</h5>
                            <small>1 Journal paper</small>
                        </article> 
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, natus. Eaque, esse eum rerum odio quibusdam nam tempore reprehenderit velit? Magni sunt laborum perferendis ab molestiae corporis ipsa deleniti maiores. Eos necessitatibus vitae sequi repellat esse quae modi fugiat minima quas est quam, tenetur ab rerum laborum deleniti earum animi.</p>
                    <a href="#contact" className='btn'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About
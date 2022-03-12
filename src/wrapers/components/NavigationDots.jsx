import React from 'react'
import './navigationDots.scss'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
        {['Header', 'About', 'Experience', 'Testimonial', 'Contact'].map((item) => (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <a 
                href={`#${item}`}
                key={item}
                className='app__navigation-dot'
                style={active === item ? {background: "#313ABC"} : {} }
            />
        ))}
    </div>
  )
}

export default NavigationDots;
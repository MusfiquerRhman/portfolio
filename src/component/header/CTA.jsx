import React from 'react'
import Resume from '../../assests/Resume_Musfiquer_Rhman.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={Resume} download className='btn'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Download CV
            </a>
            <a href='#contact' className='btn btn-primary'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Contact
            </a>
        </div>
    )
}

export default CTA;
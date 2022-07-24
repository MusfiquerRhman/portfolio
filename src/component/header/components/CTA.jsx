import React from 'react'
import Resume from '../../../assests/Resume_Musfiquer_Rhman.pdf'
import { useSnackbar } from 'notistack';

const CTA = () => {
    const { enqueueSnackbar } = useSnackbar();
    const sendNotification = () => {
        enqueueSnackbar("Thanks for Downloading my CV!", {variant: 'success'});
    }

    return (
        <div className='cta'>
            <a href={Resume} download className='btn' onClick={sendNotification}>
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
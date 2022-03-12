import React from 'react'
import {FaGithubSquare, FaFacebookSquare} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__social'>
        <a className='header__social-item' href='https://github.com/MusfiquerRhman' target='_blank' rel="noreferrer" ><FaGithubSquare /></a>
        <a className='header__social-item' href='https://www.linkedin.com/in/musfiquer-rhman-ba2a02172/' target='_blank' rel="noreferrer" ><BsLinkedin/></a>
        <a className='header__social-item' href='https://www.facebook.com/musfiquerrhman' target='_blank' rel="noreferrer" ><FaFacebookSquare /></a>
    </div>
  )
}

export default HeaderSocials;
//Componnets Imports
import React from 'react'
import  HeaderImage from '../../assets/header_image.avif'
//CSS imports
import './Header.css'


const Header = () => {
  return (
     <>
     <div className='header-wrapper'>
     <h1 className='header-text'>Shopping List</h1>
     <div className='header-image-wrapper'>
     <img className='header-image'     src={HeaderImage} alt="" />
     </div>
     
     </div>
    
     </>
  )
}

export default Header
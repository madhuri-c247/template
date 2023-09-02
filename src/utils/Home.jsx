import React from 'react'
import Header from '../components/Header'
import bgImage from '../assests/Vector 13.png'
import image from '../assests/Mask group.png'
import '../styles/home.css'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {LiaLongArrowAltDownSolid} from 'react-icons/lia'

function Home() {
  return (
    
   <div className='home-container'>
   <Header/>
   <img className='bg-image' src={bgImage} alt="background image" />
   <img className='image-home' src={image} alt="image" />
   <div className='home-content'>
    <h1>Key Performance Indicators
       in Waste Collection Route Optimization</h1>
    <p>ROC shares metrics, best practices
       and standards based on 
      decades of garbage truck routing experience.</p>
    <button className='btn'><span>READ MORE <MdKeyboardArrowRight size={'20px'}/></span></button>
   </div>
   <LiaLongArrowAltDownSolid className='arrow' size={'15%'}/>
   </div>

  )
}

export default Home
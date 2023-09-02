import React from 'react';
import '../styles/contact.css'
import bgImage from '../assests/Vector 18.png'
import profile from '../assests/tinywow_change_bg_photo_20992426 1.png'
function Contact() {
  return (
    <div className='contact-container'>
        <img className='bgImage' src={bgImage} alt="bgImage" />
        <div className='contact-content'>
            <img src={profile} alt="" />
            <div className="inner">
                <h3>A 15 minute call to review your route efficiency before
                     considering route optimization software</h3>
                <p></p>
                <button></button>
            </div>

        </div>
        
    </div>
  )
}

export default Contact
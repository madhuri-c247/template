import React, { useState } from 'react'
import './reviewForm.scss'

function ReviewForm() {
    const [user, setUser] = useState({
        name:'',
        email:'',
        phoneNumber:'',
        company:'',
        message:''
    })
  return (
    <div className='form-container'>
        <div className='form-content'>
            <h1>Lets Review Your Routes</h1>
            <p>
            How can we help? How about 15 minutes to assess if you even need to optimize your routes.
            </p>
            <form action="">
                <label >Name</label>
                <input type="text" name="" id="" />
                <label >Email</label>
                <input type="text" name="" id="" />
                <label >Phone Number</label>
                <input type="text" name="" id="" />
                <label >Company</label>
                <input type="text" name="" id="" />
                <label >Share any additional message</label>
                <input type="text" name="" id="" />
                <input type="button" value="Submit" className='btn' />
            </form>

        </div>
    </div>
  )
}

export default ReviewForm
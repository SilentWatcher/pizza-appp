import React from 'react';
import pizzaLeft from '../assets/pizzaLeft.jpg';

import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className='contact'>
      <div className="leftSide" style={{backgroundImage:`url(${pizzaLeft})` }}></div>
      <div className="rightSide">
        <h1>CONTACT US</h1>
        <form id="contact-from" method='POST'>
            <label htmlFor="name">Full Name</label>
            <label name="name" placeholder='Enter your Full Name' type='text' />

            <label htmlFor="name">Email</label>
            <label name="email" placeholder='Enter your Email' type='text' />
            <button type='submit'> Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact

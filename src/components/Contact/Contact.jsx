import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'

import { useRef } from 'react';
import emailjs from 'emailjs-com';



export const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset()

    emailjs.sendForm('service_2my2i49', 'template_m7amtao', form.current, '3yEPsLX58_MnwNxRv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h2 className='contact_head'>Contact</h2>

      <div className="container contact_container">

        <div className="contact_options">
          <article className='contact_option'>
            <AiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>fazilthekkan01@gmail.com</h5>
            <a href="mailto:@fazilthekkan01@gmail.com" target="_blank" rel="noreferrer">Send Message</a>
          </article>
          
          <article className='contact_option'>
            <AiOutlineFacebook className='contact_option-icon'/>
            <h4>Facebook</h4>
            <h5>fazicodes@fb</h5>
            <a href="https://m.me/facebookname" target="_blank" rel="noreferrer">Send Message</a>
          </article>

          <article className='contact_option'>
            <AiOutlineWhatsApp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 7736222685</h5>
            <a href="https://api.whatsapp.com/send?phone=+917736222685" target="_blank" rel="noreferrer">Send Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name='email' placeholder='Email' required/>
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

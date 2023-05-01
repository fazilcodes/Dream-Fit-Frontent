import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'



export const Contact = () => {

  return (
    <section id='contact'>
      <h2>Contact</h2>

      <div className="container contact_container">

        <div className="contact_options">
          <article className='contact_option'>
            <AiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>contact@me.com</h5>
            <a href="mailto:" target='_blank'>Send Message</a>
          </article>
          
          <article className='contact_option'>
            <AiOutlineFacebook className='contact_option-icon'/>
            <h4>Facebook</h4>
            <h5>Facebook Name</h5>
            <a href="https://m.me/facebookname" target='_blank'>Send Message</a>
          </article>

          <article className='contact_option'>
            <AiOutlineWhatsApp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>Number here</h5>
            <a href="https://api.whatsapp.com/send?phone=+917736222685" target='_blank'>Send Message</a>
          </article>
        </div>

        <form>
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name='email' placeholder='Email' required/>
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

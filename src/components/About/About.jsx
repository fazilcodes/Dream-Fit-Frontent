import React from 'react'
import './about.css'
import about from '../../assets/about.jfif'
import {FiAward} from 'react-icons/fi'
import {RiUserStarLine} from 'react-icons/ri'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'



export const About = () => {
  return (
    <section id='about'>
      <h2>About</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={about} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FiAward className='about_icon'/>
              <h5>Experience</h5>
              <small>10+ Years Working</small>
            </article>

            <article className="about_card">
              <RiUserStarLine className='about_icon'/>
              <h5>Clients</h5>
              <small>1000+ Crossed</small>
            </article>

            <article className="about_card">
              <AiOutlineFundProjectionScreen className='about_icon'/>
              <h5>Transformation</h5>
              <small>300+ Kings</small>
            </article>
          </div>

          <p>
          We are a passionate team of fitness enthusiasts committed to helping you achieve your health goals. Join us on your fitness journey and unleash your full potential.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </section>
  )
}
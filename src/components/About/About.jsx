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
              <small>1+ Years Working</small>
            </article>

            <article className="about_card">
              <RiUserStarLine className='about_icon'/>
              <h5>Clients</h5>
              <small>100+ Crossed</small>
            </article>

            <article className="about_card">
              <AiOutlineFundProjectionScreen className='about_icon'/>
              <h5>Projects</h5>
              <small>30+</small>
            </article>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, a molestiae cumque commodi iste fugit vitae.
             Commodi ut necessitatibus deleniti repudiandae ex expedita, dolorum, sapiente perferendis delectus vel cupiditate ad!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </section>
  )
}
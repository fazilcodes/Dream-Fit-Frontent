import React from 'react'
import './services.css'
import { GiCheckMark } from 'react-icons/gi'


export const Services = () => {
  return (
    <section id='services'>
      <h2>Our Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Designing</h3>
          </div>
          <ul className='service_list'>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Lorem ipsum dolor sit consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

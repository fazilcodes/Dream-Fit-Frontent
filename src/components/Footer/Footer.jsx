import React from 'react'
import './footer.css'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'

export const Footer = () => {
  return (
    <footer>
        <div className='container footer_container'>
            <div className="footer_top">
              <h2>Dream-Fit</h2>
              <p>We are here to help you achieve your dream physique. Lets stay healthy with dream-fit</p>
              <ul className='footer_items'>
                  <li><a href=""><AiFillLinkedin/></a></li>
                  <li><a href=""><AiFillGithub/></a></li>
                  <li><a href=""><AiFillTwitterCircle/></a></li>
                  <li><a href=""><BsInstagram/></a></li>
              </ul>
            </div>
            <div className="footer_bottom">
              <small>&copy; fazicodes All right reserved</small>
            </div>
        </div>
    </footer>
  )
}

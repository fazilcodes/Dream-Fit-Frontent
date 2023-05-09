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
                  <li><a href="https://www.linkedin.com/in/fazil-thekkan01"><AiFillLinkedin/></a></li>
                  <li><a href="https://github.com/fazilcodes"><AiFillGithub/></a></li>
                  <li><a href="https://github.com/fazilcodes"><AiFillTwitterCircle/></a></li>
                  <li><a href="https://github.com/fazilcodes"><BsInstagram/></a></li>
              </ul>
            </div>
            <div className="footer_bottom">
              <small>&copy; fazicodes All right reserved</small>
            </div>
        </div>
    </footer>
  )
}

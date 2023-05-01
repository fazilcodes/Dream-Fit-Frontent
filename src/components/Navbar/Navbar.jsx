import React from 'react'
import './navbar.css'
import {GiWeightLiftingUp} from "react-icons/gi"
import {BiMenu} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'


export const Navbar = () => {

  const [toggle, settoggle] = useState(false)
  const [active, setActive] = useState('#')

  return (
    <nav>
        <div className='container navbar_container'>
          <h2>Dream-Fit</h2>
          <ul className={toggle? 'nav_items-responsive': 'nav-items'}>
              <li><a href="#" onClick={() => setActive('#')} className={ active === '#' ? 'active_link' : '' }>Home</a></li>
              <li><a href="#workout" onClick={() => setActive('#workout')} className={ active === '#workout' ? 'active_link' : '' }>Workout</a></li>
              <li><a href="#news" onClick={() => setActive('#news')} className={ active === '#news' ? 'active_link' : '' }>News</a></li>
              <li><a href="#contact" onClick={() => setActive('#contact')} className={ active === '#contact' ? 'active_link' : '' }>Contact</a></li>
          </ul>
          <button className='theme_icon'><GiWeightLiftingUp/></button>
          <button onClick={() => settoggle(!toggle)} className='nav_toggle-btn'>{toggle? <AiOutlineClose/> : <BiMenu />}</button>
        </div>
    </nav>
  )
}

import React from 'react'
import './navbar.css'
import {GiWeightLiftingUp} from "react-icons/gi"
import {BiMenu} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'

import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  const [toggle, settoggle] = useState(false)
  const [active, setActive] = useState('#')

  return (
    <nav>
        <div className='container navbar_container'>
          <h2>Dream-Fit</h2>
          <ul className={toggle? 'nav_items-responsive': 'nav-items'}>
              <li><HashLink to="/#" onClick={() => setActive('#')} className={ active === '#' ? 'active_link' : '' }>Home</HashLink></li>
              <li><HashLink to="/#workout" onClick={() => setActive('#workout')} className={ active === '#workout' ? 'active_link' : '' }>Workout</HashLink></li>
              <li><HashLink to="/#workout" onClick={() => setActive('#news')} className={ active === '#news' ? 'active_link' : '' }>News</HashLink></li>
              <li><HashLink to="/#contact" onClick={() => setActive('#contact')} className={ active === '#contact' ? 'active_link' : '' }>Contact</HashLink></li>
          </ul>
          <Link to="/api" className="theme_icon">
            <GiWeightLiftingUp />
          </Link>
          <button onClick={() => settoggle(!toggle)} className='nav_toggle-btn'>{toggle? <AiOutlineClose/> : <BiMenu />}</button>
        </div>
    </nav>
  )
}

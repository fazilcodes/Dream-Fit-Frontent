import React from 'react'
import './header.css'
import headerimage from '/New CODES/Websites/dream_fit_frontend/src/assets/headerimg.jfif'
import {MdFoodBank} from 'react-icons/md'


export const Header = () => {
  return (
    <header>
        <div className='container header_container'>
            <div className="left_content">
                <div className="left_info-top">
                    <h1>Join Us For A Better You <span className='exclamation'>!</span></h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam sapiente corporis illum temporibus nihil quis?</p>
                    <button className='btn btn-primary'>Join</button>
                </div>
                <div className="left_info-bottom">
                    <div className="info_contianer">
                        <div className="info_icon">
                            <p className='react-icon'><MdFoodBank /></p>
                        </div>
                        <div className="info_icon_right">
                            <h4>Daily Protien Tips</h4>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="info_contianer">
                        <div className="info_icon">
                            <p className='react-icon'><MdFoodBank /></p>
                        </div>
                        <div className="info_icon_right">
                            <h4>Daily Motivation</h4>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="info_contianer">
                        <div className="info_icon">
                            <p className='react-icon'><MdFoodBank /></p>
                        </div>
                        <div className="info_icon_right">
                            <h4>Daily Health</h4>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="info_contianer">
                        <div className="info_icon">
                            <p className='react-icon'><MdFoodBank /></p>
                        </div>
                        <div className="info_icon_right">
                            <h4>News</h4>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right_content">
                <img src={headerimage} alt="" />
            </div>
        </div>
    </header>
  )
}

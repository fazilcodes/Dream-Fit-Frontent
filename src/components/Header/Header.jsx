import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './header.css'
import headerimage from '../../assets/headerimg.jfif'
import {MdFoodBank} from 'react-icons/md'
import { SlEnergy } from 'react-icons/sl'
import { GiHealthNormal, GiMuscleUp } from 'react-icons/gi'

export const Header = () => {

    const [motivation, setMotivation] = useState({})
    const [protein, setProtein] = useState([])
    const [pushups, setPushups] = useState([])
    const [health, setHealth] = useState([])

    const randomNum = Math.floor(Math.random() * 100) + 1;


    const randomPushUp = pushups[Math.floor(Math.random() * pushups.length)];
    const randomProtein = protein[Math.floor(Math.random() * protein.length)];
    const randomHealth = health[Math.floor(Math.random() * health.length)];

    useEffect(()=> {
        axios.get('https://api.quotable.io/random')
        .then(response => setMotivation(response.data))
        .catch(error => console.error(error));
        
    }, [])

    useEffect(()=> {
        axios.get('https://gym-api-rfh1.onrender.com/protein_tips')
        .then(response => setProtein(response.data))
        .catch(error => console.error(error));
    }, [])
    
    useEffect(()=> {
        axios.get('https://gym-api-rfh1.onrender.com/push_ups')
        .then(response => setPushups(response.data))
        .catch(error => console.error(error));
    }, [])

    useEffect(()=> {
        axios.get('https://gym-api-rfh1.onrender.com/health')
        .then(response => setHealth(response.data))
        .catch(error => console.error(error));
    }, [])


  return (
    <header>
        <div className='container header_container'>
            <div className="left_content">
                <div className="left_info-top">
                    <h1>Join Us For A Better You <span className='exclamation'>!</span></h1>
                    <p>Make your fitness dreams a reality with our expert guidance and support. Start your journey today</p>
                    <button className='btn btn-primary'>Join</button>
                </div>
                <div className="left_info-bottom">
                    <div className="info_contianer one">
                        <div className="info_icon">
                            <p className='react-icon'><MdFoodBank /></p>
                        </div>
                        <div className="info_icon_right">
                            <h4>Protien Tips</h4>
                            <p>Here is a tip for you to increase your protein intake!</p>
                            <h3 className='protein_hover'> <MdFoodBank /> {randomProtein}</h3>
                        </div>
                    </div>
                    <div className="info_contianer two">
                        <div className="info_icon">
                            <p className='react-icon'><SlEnergy /></p>
                        </div>
                        <div className="info_icon_right">
                            <h4>Daily Motivation</h4>
                            <p>Let's get some motivation to boost the adrenaline!</p>
                            <h3 className='motivation_hover'> <SlEnergy /> {motivation.content}</h3>
                        </div>
                    </div>
                    <div className="info_contianer three">
                        <div className="info_icon">
                            <p className='react-icon'><GiHealthNormal /></p>
                        </div>
                        <div className="info_icon_right">
                            <h4>Daily Health</h4>
                            <p>Maintain Your Health with these tips and stay healthy!</p>
                            <h3 className='health_hover'> <GiHealthNormal /> {randomHealth}</h3>
                        </div>
                    </div>
                    <div className="info_contianer four">
                        <div className="info_icon">
                            <p className='react-icon'><GiMuscleUp /></p>
                        </div>
                        <div className="info_icon_right">
                            <h4>Push-up Goal</h4>
                            <p>We challenge you to complete the push-ups for today!</p>
                            <h3 className='news_hover'> <GiMuscleUp /> Complete {randomNum} {randomPushUp} Now!</h3>
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

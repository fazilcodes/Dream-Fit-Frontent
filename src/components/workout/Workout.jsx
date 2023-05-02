import React, { useEffect, useState } from 'react'
import './workout.css'
import axios from 'axios';
import back from '../../assets/workout_img/back.png'
import cardio from '../../assets/workout_img/cardio.png'
import chest from '../../assets/workout_img/chest.png'
import lower_arms from '../../assets/workout_img/lower arms.png'
import lower_legs from '../../assets/workout_img/lower legs.png'
import neck from '../../assets/workout_img/neck.png'
import upper_arms from '../../assets/workout_img/upper arms.png'
import upper_legs from '../../assets/workout_img/upper legs.png'
import waist from '../../assets/workout_img/waist.png'


const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': 'cfdfaf53d7msh928faaaeb0f614ap18ac25jsn559ed1dbe0f4',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  

const workoutImages = [
    {name: "back", url: back},
    {name: "cardio", url: cardio},
    {name: "chest", url: chest},
    {name: "lower arms", url: lower_arms},
    {name: "lower legs", url: lower_legs},
    {name: "neck", url: neck},
    {name: "upper arms", url: upper_arms},
    {name: "upper legs", url: upper_legs},
    {name: "waist", url: waist},
]



const Workout = () => {

    const [Workout, setWorkout] = useState([]);
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState([]);

    useEffect(()=> {
        axios.request(options).then(function (response) {
            setWorkout(response.data);
        }).catch(function (error){
            console.error(error)
        })
    }, [])
    return (
    <>
    <section id='workout'>
        <h2>Daily Workout</h2>
        <div className="container workout_container">
            <div className="workout_cards">
               {Workout.slice(0, 6).map((work, index) => {
                return <>
                    <article className='workout_card'>
                        <div className="card_img">
                            {workoutImages.filter(image => image.name === work).map(image => (
                                <img key={image.name} src={image.url} alt={image.name} />
                            ))}
                        </div>
                        <div className="card_info">
                            <h2>{work.toUpperCase()}</h2>
                            <button className='btn btn-primary'>Know more</button>
                        </div>
                    </article>
                </>
               })}
            </div>
            <div className="workout_right">
                <form class="form">
                    <span class="title">Subscribe to our newsletter.</span>
                    <p class="description">Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.</p>
                    <div>
                        <input placeholder="Enter your email" type="email" name="email" id="email-address" />
                        <button type="submit">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </>
  )
}

export default Workout
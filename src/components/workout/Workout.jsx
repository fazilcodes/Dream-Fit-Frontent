import React, { useEffect, useState } from 'react'
import './workout.css'
import axios from 'axios';
import back from '../../assets/workout_img/back.png'
import cardio from '../../assets/workout_img/cardio.png'
import chest from '../../assets/workout_img/chest.png'
import lower_legs from '../../assets/workout_img/lower legs.png'
import neck from '../../assets/workout_img/neck.png'
import upper_arms from '../../assets/workout_img/upper arms.png'
import shoulders from '../../assets/workout_img/shoulders.png'
import waist from '../../assets/workout_img/waist.png'

const workoutImages = [
    {name: "back", url: back},
    {name: "cardio", url: cardio},
    {name: "chest", url: chest},
    {name: "legs", url: lower_legs},
    {name: "neck", url: neck},
    {name: "shoulder", url: shoulders},
    {name: "arms", url: upper_arms},
    {name: "Abs", url: waist},
]

const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5)
}


const Workout = () => {

    const [Workout, setWorkout] = useState([]);
    const [modalData, setModalData] = useState({
        id: '',
        name: '',
        exercises: []
    })
    const [modal, setModal] = useState(false)
    const [visible, setVisible] = useState(6);
    const [modalslice, setModalSlice] = useState(3);

    useEffect(()=> {
        axios.get('https://gym-api-rfh1.onrender.com/bodyparts')
        .then(response => setWorkout(response.data.map(bodypart => bodypart.name)))
        .catch(error => console.error(error));
    }, [])

    const showModalDetails = (id) => {
        axios.get(`https://gym-api-rfh1.onrender.com/bodyparts/${id}`)
        .then(response => setModalData(response.data)
        .catch(error => console.error(error)))
    }

    const loadmore = () => {
        setVisible((prev) => prev + 3)
    }

    
    return (
    <>
    <section id='workout'>
        <h2>Home Workout</h2>
        <div className="container workout_container">
            <div className="workout_cards">
               {Workout.slice(0, visible).map((work, index) => {
                return <>
                    <article className='workout_card'>
                        <div className="card_img">
                            {/* Below code is used to filter the images for its corresponding Api outputs */}
                            {workoutImages.filter(image => image.name === work).map(image => (
                                <img key={image.name} src={image.url} alt={image.name} />
                            ))}
                        </div>
                        <div className="card_info">
                            <h2>{work.toUpperCase()}</h2>
                            <button className='btn btn-primary' onClick={() => {
                                setModal(true)
                                showModalDetails(index)
                                }}>Know more</button>
                        </div>
                    </article>
                </>
               })}
               <div className='btn_container'>
               {visible < Workout.length && ( <button className='btn btn-primary' onClick={loadmore}>Load More</button>)}
               </div>
            </div>
            <div className="workout_right">
                <form class="form">
                    <span class="title">Subscribe to our newsletter.</span>
                    <p class="description">Get fit and stay up-to-date with our fitness newsletter. Expert tips, workouts, and nutrition advice delivered to your inbox every week.</p>
                    <div>
                        <input placeholder="Enter your email" type="email" name="email" id="email-address" />
                        <button type="submit">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
        {/* Modal */}
        { modal && 
        <div className='modal_section'>
            <div className='container modal_container'>
                <button className='btn btn-primary text-end' onClick={() => {setModal(false)}}> X </button>
                <div className='modal_body'>
                    {shuffle(modalData.exercises.slice(0, modalslice).map((exercise, index) =>{
                        return <>
                        <div className="exercise_container">
                            <h2>{exercise.exercise.toUpperCase()}</h2>
                            <h2>Difficulty: {exercise.difficulty.toUpperCase()}</h2>
                            <img src={exercise.gif} alt="" />
                        </div>
                        </>
                    }))}
                </div>
                <div className="modal_footer">
                    <button className='close_modal-btn-2 btn btn-primary' onClick={() => setModal(false)}>Close</button>
                    <button className='btn btn-primary' onClick={() => setModalSlice(loadmore)}>Load More</button>
                </div>
            </div>
        </div> }
    </section>
    </>
  )
}

export default Workout
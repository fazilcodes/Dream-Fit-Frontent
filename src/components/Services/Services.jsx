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
            <h3>Personal Training</h3>
          </div>
          <ul className='service_list'>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Exercise programming: Designing personalized exercise plans </p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Nutrition coaching: Providing guidance on healthy eating habits</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Injury prevention and rehabilitation: Developing strategies to prevent injuries during exercise</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Motivation and accountability: Keeping clients motivated and on track with their fitness goals</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Lifestyle coaching: Addressing factors such as stress, sleep, and hydration to help clients optimize their overall health</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Diet Plans</h3>
          </div>
          <ul className='service_list'>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Macronutrient balance: Developing a diet plan that balances intake of carbohydrates, protein, and fat</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Calorie tracking: Using tools such as food diaries</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Food sensitivity and allergies: Identifying and eliminating foods that cause digestive issues</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Supplementation: Recommending supplements to fill gaps in clients' diets or to support specific health</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Behavioral modification: Addressing psychological factors such as emotional eating, cravings</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Premium Coaching</h3>
          </div>
          <ul className='service_list'>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Personalized programming: Creating a customized training and nutrition plan</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Regular feedback and assessment: Providing ongoing feedback on progress, technique</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Accountability and motivation: Regular check-ins, goal-setting, and accountability strategies</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Lifestyle coaching: Addressing factors such as sleep, stress, and overall health</p>
            </li>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>24/7 support: Offering continuous support and guidance to clients through phone, email, or messaging services</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

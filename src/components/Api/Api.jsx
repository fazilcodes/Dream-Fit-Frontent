import './api.css';
import { useState, useCallback } from 'react';

export const Api = () => {
  const [muscle, setMuscle] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [workouts, setWorkouts] = useState([]);

  const [loadmore, setLoadmore] = useState(3)

  const handleLoadmore = () => {
    setLoadmore(loadmore + 3);
  };

  const fetchMuscleData = useCallback(async () => {
    try {
      const response = await fetch(`http://localhost:3000/Muscle?name=${muscle.toLowerCase()}`);
      const data = await response.json();
      const muscles = data[0];

      if (muscles) {
        const filteredWorkouts = muscles.workouts.filter((w) => w.difficulty === difficulty.toLowerCase());
        setWorkouts(filteredWorkouts);
      } else {
        setWorkouts([]);
        console.log(`Muscle not found: ${muscle}`);
      }
    } catch (error) {
      console.error(error);
    }
  }, [muscle, difficulty]);

  const handleSearch = () => {
    fetchMuscleData();
  };

  return (
    <section id="api_section">
      <div className="container api_container">
        <h1 className='api_title'>Dream-Fit <span>API</span></h1>
        <div className="search_box">
          <input type="text" placeholder="Enter the Muscle" onChange={(event) => setMuscle(event.target.value)} />
          <input type="text" placeholder="Enter Difficulty" onChange={(event) => setDifficulty(event.target.value)} />
          <button className="btn btn-primary" type="submit" onClick={handleSearch}>
            Submit
          </button>
        </div>
        <div className="search_result-container">
          {workouts.slice(0, loadmore).map((workout) => (
            <div className="api_result">
              <h2 key={workout.id}>{workout.exercise.toUpperCase()}</h2>
              <div className="image_gif-container">
                <img src={workout.gif_url} alt="" />
              </div>
            </div>
          ))}
        </div>
        {loadmore < workouts.length && (
        <button onClick={handleLoadmore} className='btn btn-primary loadmore'>Load More</button>
        )}
      </div>
    </section>
  );
};

export default Api;
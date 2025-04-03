import { useEffect, useState } from "react";

// components
import WorkoutDetails from "../components/WorkoutsDetails";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  // Fetch workouts from the API when the component mounts
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();
      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home container mt-4">
      <div className="row">
        {workouts &&
          workouts.map((workout) => (
            <div key={workout._id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="workout-name">{workout.title}</h5>
                  <WorkoutDetails workout={workout} />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
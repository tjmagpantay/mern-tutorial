import { useEffect, useState } from "react";

// components
import WorkoutDetails from "../components/WorkoutsDetails";
import WorkoutForm from "../components/WorkoutForm";

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
        <div className="col-md-8">
          {workouts &&
            workouts.map((workout) => (
              <div key={workout._id} className="card mb-4">
                <div className="card-body">
                  <WorkoutDetails workout={workout} />
                </div>
              </div>
            ))}
        </div>
        <div className="col-md-4">
          <WorkoutForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
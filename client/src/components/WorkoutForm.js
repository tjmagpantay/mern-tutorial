import { useState } from "react"; // Added import for useState
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

const WorkoutForm = () => {
    const [title, setTittle] = useState("");
    const [load, setLoad] = useState("");    
    const [reps, setReps] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const workout = { title, load, reps };
        const response = await fetch("/api/workouts", {
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const json = await response.json();
        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setTittle("");
            setLoad("");
            setReps("");
            setError(null);
            console.log("New workout added", json);
        }
    };

    return (
        <div className="card mt-4">
            <div className="card-body">
                <form className="create" onSubmit={handleSubmit}>
                    <h3 className="card-title">Add a New Workout</h3>

                    <label>Exercise Title:</label>
                    <input
                        type="text"
                        className="form-control mb-3"
                        onChange={(e) => setTittle(e.target.value)}
                        value={title}
                    />

                    <label>Load (Kg):</label>
                    <input
                        type="number"
                        className="form-control mb-3"
                        onChange={(e) => setLoad(e.target.value)}
                        value={load}
                    />

                    <label>Reps:</label>
                    <input
                        type="number"
                        className="form-control mb-3"
                        onChange={(e) => setReps(e.target.value)}
                        value={reps}
                    />

                    <button className="btn btn-primary mt-3">Add Workout</button>
                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                </form>
            </div>
        </div>
    );
};

export default WorkoutForm;
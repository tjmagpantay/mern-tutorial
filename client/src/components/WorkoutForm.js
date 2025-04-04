import { useState } from "react"; // Added import for useState

const WorkoutForm = () => {
    const [title, setTittle] = useState("");
    const [load, setLoad] = useState(false);    
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
        if (response.ok) {
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
        <form className="create" onSubmit={handleSubmit}>
            <h3> Add a new workout</h3>

            <labeL>Exercise Title:</labeL>
            <input
                type="text"
                onChange={(e) => setTittle(e.target.value)}
                value={title}
            />

            
        <labeL>Load (Kg):</labeL>
            <input
                type="number"
                onChange={(e) => setTittle(e.target.value)}
                value={load}
            />

        <labeL>Reps:</labeL>
            <input
                type="number"
                onChange={(e) => setTittle(e.target.value)}
                value={reps}
            />

            <button className="btn btn-primary mt-3">Add Workout</button>
            {error && <div className="error">{error}</div>}

        </form>
    )
}

export default WorkoutForm;
const WorkoutDetails =({workout})=>{
    return (
        <div className = "workout-details">
            <h4> {workout.title}</h4>
            <p><b>Load (kg):</b>{workout.load}</p>
            <p><b>Reps:</b>{workout.reps}</p>
            <p>{workout.createdAt}</p>
        </div>
    )
}

export default WorkoutDetails
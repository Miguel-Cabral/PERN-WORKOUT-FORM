import React from 'react'

const WorkoutDetails = ({workout}) => {
  return (
   <div className="workout-details">
   <h4>{workout.Tiltle}</h4>
   <p>
     <strong>Load (kg): </strong>
     {workout.Loads}
   </p>
   <p>
     <strong>Reps: </strong>
     {workout.Reps}
   </p>
   
 </div>
  )
}

export default WorkoutDetails
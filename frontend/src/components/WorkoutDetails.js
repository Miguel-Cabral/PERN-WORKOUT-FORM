import React from 'react'

const WorkoutDetails = ({workout}) => {
  return (
   <div className="workout-details">
   <h4>{workout.title}</h4>
   <p>
     <strong>Load (kg): </strong>
     {workout.loads}
   </p>
   <p>
     <strong>Reps: </strong>
     {workout.reps}
   </p>
   
 </div>
  )
}

export default WorkoutDetails
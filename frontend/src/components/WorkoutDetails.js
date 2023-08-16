import React from 'react'

const WorkoutDetails = ({workout, onDelete}) => {

  const handleClick = async() =>{
    const response = await fetch('/workout/' + workout.id,{
      method: 'DELETE'
    })

    if (response.ok){
      onDelete(workout.id);

    } else {
      console.error('Failed to delete workout')
    }

  }
  
  
  return (
   <div className="workout-details">
   <h4>{workout.tiltle}</h4>
   <p>
     <strong>Load (kg): </strong>
     {workout.loads}
   </p>
   <p>
     <strong>Reps: </strong>
     {workout.reps}
   </p>
   <span onClick={handleClick}>DELETE </span>
   
 </div>
  )
}

export default WorkoutDetails
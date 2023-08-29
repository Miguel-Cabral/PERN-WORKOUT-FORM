import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { format, formatDistanceToNow  } from 'date-fns';


const WorkoutDetails = ({ workout, onDelete }) => {

  const timeElapsed = formatDistanceToNow(new Date(workout.created_at));

  const handleClick = async () => {
    const response = await fetch('/workout/' + workout.id, {
      method: 'DELETE'
    })

    if (response.ok) {
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
      <p>
        <strong>Series: </strong>
        {workout.series}
      </p>
      <p>
        <strong>Date: </strong>
        {format(new Date(workout.created_at), 'MMM d, yyyy HH:mm')}
     
      </p>
      <p>{timeElapsed}ago</p>
      
      <span onClick={handleClick}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </span>

    </div>
  )
}

export default WorkoutDetails
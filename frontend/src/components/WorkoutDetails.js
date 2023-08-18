import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const WorkoutDetails = ({ workout, onDelete }) => {

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
      <span onClick={handleClick}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </span>

    </div>
  )
}

export default WorkoutDetails
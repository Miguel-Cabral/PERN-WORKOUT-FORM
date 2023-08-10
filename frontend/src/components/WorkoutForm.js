import {useState} from 'react'

const WorkoutForm = () => {
 const[title, setTitle] = useState('')
 const[loads, setLoads] = useState('')
 const[reps, setReps] = useState('')

 const handleSubmit = async(e) =>{
  e.preventDefault()
  const workout = {title, loads, reps}
  const response = await fetch('/workouts', {
    method: 'POST',
    body: JSON.stringify(workout),
    headers: {
      'content-Type': 'application/json'
    }
  })
  const json = await response.json()
  if (!response.ok){
    setError(json.error)
  }
  if(response.ok){
    setTitle('')
    setLoads('')
    setReps('')
    setError(null)
    console.log('new workout added', json)
  }
 }
  return (
    <form className='create' on onSubmit={handleSubmit}>
     <h3>Add a New Workout</h3>
     <label>Exersize Title</label>
     <input type='text'
       onChange={(e)=> setTitle(e.target.value)}
       value={title}
     />
     <label>Load (in kg):</label>
     <input type='number'
       onChange={(e)=> setLoads(e.target.value)}
       value={loads}
     />
     <label>Reps:</label>
     <input type='number'
       onChange={(e)=> setReps(e.target.value)}
       value={reps}
     />
     <button> Add Workout</button>
     
    </form>
  )
}

export default WorkoutForm
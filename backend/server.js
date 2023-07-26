const PORT = process.env.PORT ?? 8000
const express = require('express')

const pool = require('./db')

const app = express()


//middleware
app.use(express.json());

//GET all workouts
app.get('/workouts', async(req, res) => {
  try {
   const getWorkouts = await pool.query('SELECT * FROM workouts')
   res.json(getWorkouts.rows)
 
  } catch (error) {
   console.error(error)
  }
  
 
 })
 
 //GET a single workout
 app.get('/workout/:id', async(req, res) => {
  const { id } = req.params;

try {
  const getWorkout = await pool.query('SELECT * FROM workouts WHERE Id = $1',[id]);
  res.json(getWorkout.rows)
 
} catch (error) {
  console.log(err);
  
}
  
})
 
 //POST a new workout
 app.post('/', (req, res) => {
  res.json({mssg: 'POST a new workout'})
 })
 
 //DELETE  a workout
 app.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE  a workout'})
 })
 
 
 //UPDATE a workout
 app.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a workout'})
 })
 





//listen for requests
app.listen(PORT, () =>{
 console.log("listening on port", PORT)
})
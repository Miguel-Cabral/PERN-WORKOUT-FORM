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
 
} catch (err) {
  console.log(err);
  
}
  
})
 
 //POST a new workout
 app.post('/workouts', async (req, res) => {
  const {title, loads, reps, series} = req.body;
  console.log(title, loads, reps, series)

  try {
    const createWorkout = await pool.query(
      `INSERT INTO workouts(Tiltle, Loads, Reps, Series)VALUES($1, $2, $3, $4)`,[title, loads, reps, series]);
    res.json(createWorkout);
  } catch (err) {
    console.log(err);
  }
});
 
 //DELETE  a workout
 app.delete('/workout/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleteWorkout = await pool.query('DELETE FROM workouts WHERE Id = $1;', [
      id
    ]);
    res.json(deleteWorkout);
  } catch (err) {
    console.error(err);
  }

 })
 
 
 //UPDATE a workout
 app.put('/workout/:id', async (req, res) => {
  const { id } = req.params;
  const { title, loads, reps } = req.body;
  try {
    const editWorkout= await pool.query(
      'UPDATE workouts SET Tiltle = $1, Loads=$2, Reps=$3 WHERE Id = $4',
      [title, loads, reps, id]
    );
    res.json(editWorkout);
  } catch (err) {
    console.error(err);
  }
 })
 

//listen for requests
app.listen(PORT, () =>{
 console.log("listening on port", PORT)
})
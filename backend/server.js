const PORT = process.env.PORT ?? 8000
const express = require('express')

const workoutRoutes = require("./routes/workouts");
const pool = require('./db')

const app = express()


//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


//routes
app.use('/api/workouts', workoutRoutes);


//listen for requests
app.listen(PORT, () =>{
 console.log("listening on port", PORT)
})
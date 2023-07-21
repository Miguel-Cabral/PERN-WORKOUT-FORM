const express = require('express')

const app = express()

//routes
app.get('/', (req, res) => {
 res.json({messeg: 'welcome to my app'})
})


//listen for requests
app.listen(3000, () =>{
 console.log('listining on port 3000')
})
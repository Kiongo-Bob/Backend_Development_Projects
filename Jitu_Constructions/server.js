const express = require('express') // Require express dependency

const app =  express()

app.use(express.json()) // Parse the data and display it in JSON

app.use((err, req, res, next)=>{  // Error handling
    res.json({Error:err})
})

app.listen(4500, ()=>{
    console.log('Server running on port 4500');
})
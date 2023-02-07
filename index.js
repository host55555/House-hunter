const express = require('express');
const cors = require('cors')
const connectDb =require('./config/db')
//creating app
const app = express();
//middleware
app.use(express.json);
app.use(cors())

const port = process.env.PORT || 5000
    



//server starting
app.listen(port, ()=> {    
    console.log(`server started on port ${port}`)
})

const express = require('express');
const cors = require('cors')
const connectDb =require('./src/config/db')
//import routes
const houseRouter = require('./src/routes/houseRouter')
const agentRouter = require('./src/routes/agentRouter')
const adminRouter = require('./src/routes/adminRouter')
//creating app
const app = express();
//middleware
app.use(express.json());
app.use(cors())   
//routes
app.use('/api/house',houseRouter);
app.use('/api/agents',agentRouter);   
app.use('/api/admin', adminRouter);   
    

const port =  4000        
     

    
//home route
  


//server starting
app.listen(port, ()=> {    
    console.log(`Server started on: http://localhost:${port}`)
})      

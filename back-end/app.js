const express= require('express');
const cors =require('cors')
const user = require('./routers/user')
const ques = require('./routers/question')
const dotenv =require('dotenv')
const cookieParser = require('cookie-parser')

const app =express();
dotenv.config();
app.use(express.json())
app.use(cookieParser());

var corsOptions = {
    credentials:true,
    origin: "http://localhost:5173"
  };

app.use(cors(corsOptions));
app.use('/user',user);
app.use('/ques',ques);


app.listen(3000,console.log('Server running on Port: 3000'));
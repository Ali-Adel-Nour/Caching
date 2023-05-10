const express = require('express');

const axios = require('axios');

const redis = require('redis');

const responseTime = require('response-time');

const {promisify}= require('util');

const app = express();

app.use(responseTime())

const client = redis.createClient({
  host:'127.0.0.1',
  port:6379
})

app.get('/rockets',async(req,res,next)=>{
  try{
    const response = await axios.get('https://api.spacexdata.com/v3')
    res.send(response.data)

  }catch(error){
  res.send(error.message)
  }
})

const Port = process.env.PORT || 3000

app.listen(Port,()=>{
  console.log(`listening on ${Port}`);
})
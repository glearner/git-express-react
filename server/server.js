const express = require('express');
const path = require('path');
const axios = require('axios');
const JSON = require('circular-json')
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();




app.use(express.static(path.join(__dirname,'..','client/build')))

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname,'..','/client/build/index.html'));
//   });

app.get("/user",(req,res)=>{
    user = req.query.user
    console.log(user)
    url = `https://api.github.com/search/users?q=${user}&client_id=9cf7f57bf7520920010f&client_secret=1bfac1248ddbb8dbbee0fca3c2e8800276e957ab`
    console.log(url)
    axios.get(url).then(
        (r)=>{ 
            res.json((r.data))}
    ).catch(e=>{
        console.log(e)
        res.status(400).send(e)
    })
    
})

app.get("/repo",(req,res)=>{
    user = req.query.user;
  
    url =`https://api.github.com/users/${user}/repos?client_id=9cf7f57bf7520920010f&client_secret=1bfac1248ddbb8dbbee0fca3c2e8800276e957ab`
    console.log(url)
    axios.get(url).then(
        r=>{ res.json(r.data)}
    ).catch(e=>{
        res.status(400).send(e)
    })
})

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("Server started at ",port);
})


const express = require('express');
const app = express();
// used to parse res.body
const bodyParser = require('body-parser');
// convert json into object and add it into res.body use in case of post or put request
app.use(bodyParser.json());

app.listen(3000,()=>{console.log("server started at port 3000")});

app.get('/',(req,res)=>{
    res.send('hello this is my first message from the backend');
});

app.post('/api/users',(req,res)=>{
    const {userName, userId} = req.body;
    console.log(userName);
    console.log(userId);
    res.send("User registerd successfully");
})
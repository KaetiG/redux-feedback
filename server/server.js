const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const pool = require('./modules/pool');
//-----connection to database module-------//
//-----lets us use pool.query requests----// 


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for React requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/


//---POST ROUTE---//
//takes in the object/its properties and adds them to
//the database. 
app.post('/', (req, res) =>{
    console.log(req.body);
    pool.query(`INSERT INTO "feedback" 
    ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`, //<---this protects user data
    [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
    .then (()=>{
       res.sendStatus(201);
    }).catch((error)=>{
        console.log('error with INSERT feedback query', error);
        res.sendStatus(500);//<-internal server error
    })
    res.sendStatus(200);
    
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});
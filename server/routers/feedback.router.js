// const express = require('express');
// const router = express.Router();
// const pool = require('../modules/pool');

// //POST ROUTE --- REMOVE GET UNTIL STRETCH

// router.post('/', (req, res) =>{
//     pool.query(`INSERT INTO "feedback" 
//     ("feeling", "understanding", "support", "comments")
//     VALUES ($1, $2, $3, $4);`, //<---vvvvthis protecc from attacc
//     [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
//     .then (()=>{
//         res.sendStatus(201);
//     }).catch((error)=>{
//         console.log('error with INSERT feedback query', error);
//         res.sendStatus(500);//<-internal server error
//     })
    
// })

// router.get('/', (req, res) => {
//     console.log('GET /feedback');
//     pool.query('SELECT * from "prime_feedback";').then((result) => {
//         res.send(result.rows);
//     }).catch((error) => {
//         console.log('Error GET /feedback', error)
//         res.sendStatus(500);
//     });
// })

// module.exports = router;
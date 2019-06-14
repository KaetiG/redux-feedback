const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//POST ROUTE --- REMOVE GET UNTIL STRETCH



// router.get('/', (req, res) => {
//     console.log('GET /feedback');
//     pool.query('SELECT * from "prime_feedback";').then((result) => {
//         res.send(result.rows);
//     }).catch((error) => {
//         console.log('Error GET /feedback', error)
//         res.sendStatus(500);
//     });
// })

module.exports = router;
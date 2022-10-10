const { json } = require('express');
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const bus = require('../models/bus');
const router = express.Router();
const Bus = require('../models/bus');

router.get('/', async(req,res) => {
    try {
        const b = await Bus.find({
            source : req.query.source,
            destination : req.query.destination,
            date : req.query.date
        })
        res.json({
            b,
            "length" : b.length
        })
    } catch (error) {
        res.send('Error' + error);
    }
})

router.get('/booking', async(req,res) => {
    try {
        const c = await Bus.find({
            _id : req.query.id 
        })
        res.json({
            c
        })
    } catch (error) {
        res.send('Error' + error);
    }
})



router.post('/',async(req,res) => {
    const busData = new Bus({
        name : req.body.name,
        source : req.body.source,
        destination : req.body.destination,
        fair : req.body.fair,
        date : req.body.date
    }) 
    
    try {
        const b1 = await busData.save();
        res.json(b1);
    } catch (error) {
        res.send('Error' + error)
    }
})

module.exports = router;
const express = require('express');
const Passanger = require('../models/passengers');
const router = express.Router();
var nodemailer = require('nodemailer');

router.post('/',async(req,res) => {
    const passengerData = new Passanger({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        noOfPassenger : req.body.noOfPassenger,
        busId : req.body.busId,
        total : req.body.total
    }) 
    try {
        const p = await passengerData.save();

        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'rubye.sawayn@ethereal.email',
                pass: 'ck2V3XDXap2ZzEYhwt'
            }
        });
        var mailOptions = {
            from: 'rubye.sawayn@ethereal.email',
            to: p.email,
            subject: 'Bus Tickets',
            text: 'Hello '+p.firstName+' '+p.lastName+' we are please to inform you that your ticket has been booked for '+p.noOfPassenger+' passenger, your total is '+p.total+' rupess. Booking id : '+p._id
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
        });
        res.json(p);
    } catch (error) {
        res.send('Error' + error)
    }
})



module.exports = router;
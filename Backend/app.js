const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/ticketBookingDB';

const app = express();
mongoose.connect(url, {useNewUrlParser:true});
const con = mongoose.connection;
con.on('open', () => {
    console.log('Connected...');
})
app.use(express.json());
const busesRouter = require('./routers/buses');
const passengerRouter = require('./routers/passenger');

app.use('/bus',busesRouter); 
app.use('/passenger',passengerRouter)


app.listen(9000, () => {
    console.log('Server Started')
})
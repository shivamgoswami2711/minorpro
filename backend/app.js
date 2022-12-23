const express = require('express');
const cors = require("cors");
const error = require('./middleware/error/error');
const donationRoute = require('./router.js/donationRoute');
const medicineRoute = require('./router.js/medicineRoute');
const userRoute = require('./router.js/userRoute');
const app = express()

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    console.log(req.body)
    res.send('hello world')
  })
app.use("/api/donation",donationRoute) 
app.use("/api/medicine",medicineRoute) 
app.use("/api/user",userRoute) 
app.use(error);

module.exports = app;
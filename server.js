const dns = require("node:dns");

dns.setServers(["8.8.8.8", "1.1.1.1"])


const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')

const PORT = process.env.PORT ? process.env.PORT : "3000"

// conttrolers ==============================================
const authCtrl = require('./controller/auth.js')
const usersCtrl = require('./controller/users.js')
const patientCtrl = require('./controller/patientz.js')
const scheduleCtrl = require('./controller/schedulez.js')
const appointmentCtrl = require('./controller/appointmentz.js')

const verifyToken = require('./middleware/verify-token')

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}. 🥭`)
})

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// aouth & usere Routes go here
app.post('/auth/sign-up', authCtrl.signUp)
app.post('/auth/sign-in' , authCtrl.signIn)
app.get('/users', verifyToken, usersCtrl.index)

// patient routes
app.post('/patients', verifyToken, patientCtrl.create)
app.get('/patients', verifyToken, patientCtrl.index)
app.delete("/patients/:patientId" , verifyToken, patientCtrl.deletePatient)
app.put("/patients/:patientId" , verifyToken, patientCtrl.updatePatient)
app.get("/patients/:patientId" , verifyToken, patientCtrl.show)

//Schedule Routes
app.post("/schedules/new", verifyToken, scheduleCtrl.create)
app.get('/schedules', verifyToken, scheduleCtrl.index)
app.delete('/schedules/:scheduleId', verifyToken, scheduleCtrl.deleteSchedule)
app.put('/schedules/:scheduleId', verifyToken, scheduleCtrl.updateSchedule)
app.get('/schedules/:scheduleId', verifyToken, scheduleCtrl.show)

//appointments Route
app.post('/schedules/:scheduleId/appointments', verifyToken, appointmentCtrl.create)
app.delete('/schedules/:scheduleId/appointments/:appointmentId', verifyToken, appointmentCtrl.deleteApp)

app.listen(PORT, () => {
  console.log(`The express app is ready on port ${PORT}! 😀`)
})




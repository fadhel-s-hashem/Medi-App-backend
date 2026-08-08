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
app.post('/patients/new', patientCtrl.create)
app.get('/patients', patientCtrl.index)
app.delete("/patients/:patientId" , patientCtrl.deletePatient)
app.put("/patients/:patientId" , patientCtrl.updatePatient)

//Schedule Routes
app.post("/schedules/new", scheduleCtrl.create)
app.get('/schedules', scheduleCtrl.index)
app.delete('/schedules/:scheduleId', scheduleCtrl.deleteSchedule)
app.put('/schedules/:scheduleId', scheduleCtrl.updateSchedule)

app.listen(PORT, () => {
  console.log(`The express app is ready on port ${PORT}! 😀`)
})




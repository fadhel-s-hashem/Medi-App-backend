const mongoose = require('mongoose')

const scheduleSchema = new mongoose.Schema({
    doctorName: {
        type: String,
        required: true,
        trim: true,
    },
    specialty: {
        type: String,
        trim: true,
    },
    date: {
        type: Date,
        required: true,
        
    },
    shiftStart: {
        type: String,
        default: '08:00',
        required: true, 
    },
    shiftEnd: {
        type: String,
        required: true,
    },
  
}, { timestamps: true })

const Schedule = mongoose.model('Schedule', scheduleSchema)

module.exports = Schedule
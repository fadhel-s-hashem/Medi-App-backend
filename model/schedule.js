const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref:  'Patient',
        
    },

   timeSlot: {
        type: String, 
       
        
    },
    status: {
        type: String,
        enum: ['scheduled', 'arrived', 'completed'],
        default: 'scheduled',
    },
    notes: {
        type: String,
    },
} , { timestamps: true })

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
    appointments: [appointmentSchema],
}, { timestamps: true })

const Schedule = mongoose.model('Schedule', scheduleSchema)

module.exports = Schedule
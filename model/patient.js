const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    CPR:{
        type:String,
        require:true,
    },
    phroneNumber:{
        type: String,
        require: true,
        
    },
    gender:{
        type: String,
        enum:['male', 'female'],
        lowercase: true,
        default: 'male',
    },
    birthDate:{
        type: Date,

    }

} ,{timestamps: true})

const Patient = mongoose.model('Patient' , patientSchema)

module.exports = Patient
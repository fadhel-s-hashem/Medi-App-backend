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
    phoneNumber:{
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

    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

} ,{timestamps: true})

const Patient = mongoose.model('Patient' , patientSchema)

module.exports = Patient
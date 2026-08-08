const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    CPR:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
        trim: true,
    },
}, {timestamps: true})

// so wehem call json no one see password (for now its error)
// toJSON must JSON be capital all letter
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.password
    }
})


const User = mongoose.model('User' , userSchema)

module.exports = User
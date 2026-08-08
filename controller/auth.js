// Add in the jsonwebtoken package
const User = require('../model/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const signUp = async (req,res) => {
    try {

        // check if there exisett user
        const userInDatabase = await User.findOne({
            CPR: req.body.CPR
        })

        if (userInDatabase){
            return res.status(409).json({err:'An account with this CPR already exists'})
        }
        // for the password securety
        const hashedpassword = bcrypt.hashSync(req.body.password, 10)

        const userData = {
            CPR: req.body.CPR,
            username: req.body.username,
            password: hashedpassword
        }

        
        const user = await User.create(userData) 
        // create the payload
            const payload = {username: user.username, CPR: user.CPR , _id:user._id}
        // create the token+ attach the payload
            const token = jwt.sign({payload}, process.env.JWT_SECRET)

        res.json({token})
        
    } catch (err) {
        res.json({ err: err.message })
    }
}

const signIn = async (req,res) => {
    try {
        // check if there user in database
        const userInDatabase = await User.findOne({
            CPR: req.body.CPR
        })

        if (!userInDatabase){
            return res.status(404).json({err:'User dose not exit.'})
        }

        // check if password matched
        const validPassword = bcrypt.compareSync(req.body.password, userInDatabase.password)
        
        if(!validPassword) {
            return res.status(401).json({ err: 'Login failed. Please try again.' })
        }

        // create the payload
            const payload = {username: userInDatabase.username, CPR: userInDatabase.CPR , _id:userInDatabase._id}
        // create the token+ attach the payload
            const token = jwt.sign({payload}, process.env.JWT_SECRET)

        res.status(200).json({ token })

    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}

module.exports ={
    
    signUp,
    signIn,
}
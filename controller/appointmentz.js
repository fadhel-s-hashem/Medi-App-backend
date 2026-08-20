const express = require("express")
const Schedule = require('../model/schedule.js')

const create = async (req,res) => {
    try {
        req.body.author = req.user._id
        const schedule = await Schedule.findById(req.params.scheduleId)

        schedule.appointments.push(req.body)
        await schedule.save()
        await schedule.populate(['appointments.patient','appointments.author'])
        res.status(201).json(schedule)
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}

const deleteApp = async (req,res) => {
    try {
        const schedule = await  Schedule.findById(req.params.scheduleId)

        const appointments = schedule.appointments.id(req.params.appointmentId)

        schedule.appointments.remove({_id: req.params.appointmentId})
 res.status(200).json({message: "appointment deleted"}) 

    } catch (err) {
     res.status(500).json({ err: err.message })
        
    }
}

const update = async (req,res) => {
    const schedule = await  Schedule.findById(req.params.scheduleId)
    const appointments = schedule.appointments.id(req.params.appointmentId)


}

module.exports={
    create,
    deleteApp,
}
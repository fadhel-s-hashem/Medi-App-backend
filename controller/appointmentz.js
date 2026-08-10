const express = require("express")
const Schedule = require('../model/schedule.js')

const create = async (req,res) => {
    try {
        const schedule = await Schedule.findById(req.params.scheduleId)

        schedule.appointments.push(req.body)
        await schedule.save()
        res.status(201).json(schedule)
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}

module.exports={
    create,
}
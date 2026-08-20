const express = require("express")
const Schedule = require('../model/schedule.js')

const create = async (req,res) => {
    try {
    req.body.author = req.user._id
    const schedule = await Schedule.create(req.body)
    res.status(201).json(schedule)
    } catch (err) {
        res.status(500).json({ err: err.message })
        
    }
}

const index = async (req,res) => {
    try {
        const schedule = await Schedule.find()
        .populate("author").populate('appointments.patient')
        res.status(201).json(schedule)
    } catch (err) {
        res.status(500).json({ err: err.message })
        
    }
}

const deleteSchedule = async (req,res) => {
    try {
        const schedule = await  Schedule.findById(req.params.scheduleId)

        const deleteSchedule = await Schedule.findByIdAndDelete(req.params.scheduleId)
 res.status(204).json(deleteSchedule) 

    } catch (err) {
     res.status(500).json({ err: err.message })
        
    }
}

const updateSchedule = async (req,res) => {
    try {
        const schedule = await  Schedule.findById(req.params.scheduleId)


         const updateSchedule = await Schedule.findByIdAndUpdate(
           req.params.scheduleId,
           req.body,
           {new: true} 
        )
        res.status(200).json(updateSchedule)
        
    } catch (err) {
     res.status(500).json({ err: err.message })
        
    }
}

const show = async (req, res) => {
    try {
        const schedule = await Schedule.findById(req.params.scheduleId)
        .populate('appointments.patient')
        .populate('appointments.author')
        .populate("author")
        
        res.status(200).json(schedule)
    } catch (err) {

        res.status(500).json({ err: err.message })
    }
}

module.exports ={
    create,
    index,
    deleteSchedule,
    updateSchedule,
    show,
}
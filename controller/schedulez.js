const express = require("express")
const Schedule = require('../model/schedule.js')

const create = async (req,res) => {
    try {
    const schedule = await Schedule.create(req.body)
    res.status(201).json(schedule)
    } catch (err) {
        res.status(500).json({ err: err.message })
        
    }
}

const index = async (req,res) => {
    try {
        const schedule = await Schedule.find()
        .populate('appointments')
        res.status(201).json(schedule)
    } catch (err) {
        res.status(500).json({ err: err.message })
        
    }
}

module.exports ={
    create,
    index,
}
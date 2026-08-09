const express = require("express")
const Patient = require('../model/patient')

const create = async (req, res) => {
    try {
        
        const PatientInDatabase = await Patient.findOne({
            CPR: req.body.CPR
        })
        
        if (PatientInDatabase){
            return res.status(409).json({err:'An patient with this CPR already exists'})
        }
        const patient = await Patient.create(req.body);

        res.status(201).json(patient)
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}

const index = async (req, res) => {
  try {

    const patients = await Patient.find({}).sort({ createdAt: -1 })
    res.status(200).json(patients);
  } catch (err) {

    res.status(500).json({ err: err.message })
  }
}

const deletePatient = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.patientId)

        const deletePatient = await Patient.findByIdAndDelete(req.params.patientId)
        res.status(200).json(deletePatient)
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
}

const updatePatient = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.patientId)

        const updatePatient = await Patient.findByIdAndUpdate(
           req.params.patientId,
           req.body,
           {new: true} 
        )
        
        res.status(200).json(updatePatient)

    } catch (err) {
        res.status(500).json({ err: err.message })
        
    }
}

const show = async (req,res) => {
    try {
        const patient = await Patient.findById(req.params.patientId)
         res.status(200).json(patient);

    } catch (err) {
    res.status(500).json({ err: err.message })
        
    }
}

module.exports ={
    create,
    index,
    deletePatient,
    updatePatient,
    show,
}
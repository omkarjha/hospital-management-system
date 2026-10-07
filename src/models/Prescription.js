// models/Prescription.js

const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
    medicineName: String,
    dosage: String,
    duration: String
});

const prescriptionSchema = new mongoose.Schema(
    {
        appointmentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Appointment",
            required: true
        },

        doctorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor",
            required: true
        },

        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
            required: true
        },

        diagnosis: {
            type: String,
            required: true
        },

        medicines: [medicineSchema],

        instructions: {
            type: String
        },

        isDeleted: {
            type: Boolean,
            default: false
        },

        deletedAt: {
            type: Date,
            default: null
        }
    },
    {
        timestamps: true
    }
);

prescriptionSchema.index({
    patientId: 1
});

module.exports = mongoose.model(
    "Prescription",
    prescriptionSchema
);
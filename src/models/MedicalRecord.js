// models/MedicalRecord.js

const mongoose = require("mongoose");

const medicalRecordSchema =
  new mongoose.Schema(
    {
      patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
      },

      doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
      },

      appointmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment",
        required: true
      },

      symptoms: {
        type: String
      },

      diagnosis: {
        type: String
      },

      treatment: {
        type: String
      },

      visitDate: {
        type: Date,
        default: Date.now
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

module.exports = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema
);  


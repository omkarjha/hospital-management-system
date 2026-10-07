// models/Doctor.js

const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
    {

        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        specialization: {
            type: String,
            required: true
        },

        qualification: {
            type: String,
            required: true
        },

        experience: {
            type: Number,
            default: 0
        },

        consultationFee: {
            type: Number,
            required: true
        },

        availableDays: [
            {
                type: String
            }
        ],

        isAvailable: {
            type: Boolean,
            default: true
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
doctorSchema.index({
    specialization: 1
});

module.exports = mongoose.model("Doctor", doctorSchema);
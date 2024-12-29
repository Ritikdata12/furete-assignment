// models/Patient.js
const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    mobileNo: {
        type: String,
        required: true,
        match: /^[0-9]{10}$/, // Validate 10-digit mobile number
    },
    date: {
        type: Date,
        required: true,
    },
    disease: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Patient", patientSchema);

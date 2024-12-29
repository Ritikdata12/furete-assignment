const Patient = require("../Model/Bookdate");

exports.addPatient = async (req, res) => {
    try {
        const { name, mobileNo, date, disease } = req.body;

        const selectedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            return res.status(400).json({
                message: "You cannot select a previous date. Please choose a valid date.",
            });
        }

        const existingPatient = await Patient.findOne({ date });
        if (existingPatient) {
            return res.status(400).json({
                message: "This date is unavailable. Please select another date.",
            });
        }

        const newPatient = new Patient({ name, mobileNo, date, disease });
        await newPatient.save();

        res.status(201).json({
            message: "Patient added successfully",
            patient: newPatient,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error adding patient",
            error: error.message,
        });
    }
};

exports.getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ message: "Error fetching patients", error: error.message });
    }
};

exports.getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) {
            return res.status(404).json({ message: "Patient not found" });
        }
        res.status(200).json(patient);
    } catch (error) {
        res.status(500).json({ message: "Error fetching patient", error: error.message });
    }
};

exports.updatePatient = async (req, res) => {
    try {
        const updatedPatient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!updatedPatient) {
            return res.status(404).json({ message: "Patient not found" });
        }
        res.status(200).json({ message: "Patient updated successfully", patient: updatedPatient });
    } catch (error) {
        res.status(500).json({ message: "Error updating patient", error: error.message });
    }
};

exports.deletePatient = async (req, res) => {
    try {
        const deletedPatient = await Patient.findByIdAndDelete(req.params.id);
        if (!deletedPatient) {
            return res.status(404).json({ message: "Patient not found" });
        }
        res.status(200).json({ message: "Patient deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting patient", error: error.message });
    }
};

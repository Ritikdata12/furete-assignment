const express = require("express");
const { addPatient, getAllPatients, getPatientById, updatePatient, deletePatient } = require("../Controller/patientController");

const router = express.Router();

router.post("/", addPatient);
router.get("/", getAllPatients);
router.get("/:id", getPatientById);
router.put("/:id", updatePatient);
router.delete("/:id", deletePatient);

module.exports = router;

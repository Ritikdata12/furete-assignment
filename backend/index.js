require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const cors = require('cors');
const patientRoutes = require("./Routes/patientRoutes");

const app = express();


app.use(cors());
app.use(express.json());

connectDB();
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("hello server");
})

app.use("/api/patients", patientRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
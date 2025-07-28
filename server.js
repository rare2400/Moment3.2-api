/** Moment 3 DT207G
 * Av Ramona Reinholdz
 * rare2400
 */

//import packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

//middlewares - CORS and parse JSON-requests
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error("Error connecting to database:", err);
});

//experience schema
const experienceSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: [true, "Du måste ange ett företagsnamn"]
    },
    jobTitle: {
        type: String,
        required: [true, "Du måste ange en jobbtitel"]
    },
    location: {
        type: String,
        required: false
    },
    startDate: {
        type: Date,
        required: [true, "Du måste ange ett startdatum"]
    },
    endDate: {
        type: Date,
        required: false
    },
    description: {
        type: String,
        required: false
    }
});

const Experience = mongoose.model("Experience", experienceSchema);

//routes
app.get("/api", (req, res) => {
    res.json({ message: "Welcome to the API" });
});

//get-route to workexeperience
app.get("/api/workexperience", async (req, res) => {
    try {
        let result = await Experience.find({});
        return res.json(result);
    } catch (err) {
        return res.status(500).json(err);
    }
});

//post-route to workexperience
app.post("/api/workexperience", async (req, res) => {
    try {
        let result = await Experience.create(req.body);

        return res.json(result);
    } catch (err) {
        return res.status(400).json(err);
    }
});

//get, put and delete by id
app.get("/api/workexperience/:id", async (req, res) => {
    try {
        let result = await Experience.findById(req.params.id);
        if (!result) {
            return res.status(404).json({ message: "No workexperience found with that id" });
        }
        return res.json(result);
    } catch (err) {
        return res.status(500).json(err);
    }
});

app.put("/api/workexperience/:id", async (req, res) => {
    try {
        let update = await Experience.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!update) {
            return res.status(404).json({ message: "No workexperience found with that id" });
        }
        return res.json(update);
    } catch (err) {
        return res.status(500).json(err);
    }
});

app.delete("/api/workexperience/:id", async (req, res) => {
    try {
        let result = await Experience.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: "No workexperience found with that id" });
        }
        return res.json({ message: "Work experience deleted successfully" });
    } catch (err) {
        return res.status(500).json(err);
    }
});

//Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
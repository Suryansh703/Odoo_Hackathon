const express = require("express");
const router = express.Router();

const fuelController = require("../controllers/fuelController");

// Get all fuel records
router.get("/", fuelController.getAllFuelRecords);

// Get fuel record by ID
router.get("/:id", fuelController.getFuelRecordById);

// Create fuel record
router.post("/", fuelController.createFuelRecord);

// Update fuel record
router.put("/:id", fuelController.updateFuelRecord);

// Delete fuel record
router.delete("/:id", fuelController.deleteFuelRecord);

module.exports = router;

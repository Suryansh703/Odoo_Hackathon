const express = require("express");
const router = express.Router();

const vehicleController = require("../controllers/vehicleController");

// Get all vehicles
router.get("/", vehicleController.getAllVehicles);

// Get vehicle by ID
router.get("/:id", vehicleController.getVehicleById);

// Create vehicle
router.post("/", vehicleController.createVehicle);

// Update vehicle
router.put("/:id", vehicleController.updateVehicle);

// Delete vehicle
router.delete("/:id", vehicleController.deleteVehicle);

module.exports = router;
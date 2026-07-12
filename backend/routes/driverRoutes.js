const express = require("express");
const router = express.Router();

const driverController = require("../controllers/driverController");

// Get all drivers
router.get("/", driverController.getAllDrivers);

// Get driver by ID
router.get("/:id", driverController.getDriverById);

// Create driver
router.post("/", driverController.createDriver);

// Update driver
router.put("/:id", driverController.updateDriver);

// Delete driver
router.delete("/:id", driverController.deleteDriver);

module.exports = router;

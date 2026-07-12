const express = require("express");
const router = express.Router();

const maintenanceController = require("../controllers/maintenanceController");

// Get all maintenance records
router.get("/", maintenanceController.getAllMaintenance);

// Create maintenance record
router.post("/", maintenanceController.createMaintenance);

// Update maintenance record
router.put("/:id", maintenanceController.updateMaintenance);

// Delete maintenance record
router.delete("/:id", maintenanceController.deleteMaintenance);

module.exports = router;

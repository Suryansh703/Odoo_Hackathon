const express = require("express");
const router = express.Router();

const maintenanceController = require("../controllers/maintenanceController");

// Get all maintenance records
router.get("/", maintenanceController.getAllMaintenance);

// Get maintenance record by ID
router.get("/:id", maintenanceController.getMaintenanceById);

// Create maintenance record
router.post("/", maintenanceController.createMaintenance);

// Complete maintenance
router.put("/:id/complete", maintenanceController.completeMaintenance);

// Delete maintenance record
router.delete("/:id", maintenanceController.deleteMaintenance);

module.exports = router;
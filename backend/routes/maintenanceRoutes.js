// const express = require("express");
// const router = express.Router();

// const maintenanceController = require("../controllers/maintenanceController");

// // Get all maintenance records
// router.get("/", maintenanceController.getAllMaintenance);

// // Get maintenance record by ID
// router.get("/:id", maintenanceController.getMaintenanceById);

// // Create maintenance record
// router.post("/", maintenanceController.createMaintenance);

// // Complete maintenance
// router.put("/:id/complete", maintenanceController.completeMaintenance);

// // Delete maintenance record
// router.delete("/:id", maintenanceController.deleteMaintenance);
// // Update maintenance
// router.put("/:id", maintenanceController.updateMaintenance);
// module.exports = router;
 const express = require("express");
const router = express.Router();

const maintenanceController = require("../controllers/maintenanceController");

const authMiddleware = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

// Get all maintenance records
router.get(
    "/",
    authMiddleware,
    maintenanceController.getAllMaintenance
);

// Create maintenance record
router.post(
    "/",
    authMiddleware,
    authorize("Admin", "Fleet Manager"),
    maintenanceController.createMaintenance
);

// Update maintenance record
router.put(
    "/:id",
    authMiddleware,
    authorize("Admin", "Fleet Manager"),
    maintenanceController.updateMaintenance
);

// Delete maintenance record
router.delete(
    "/:id",
    authMiddleware,
    authorize("Admin"),
    maintenanceController.deleteMaintenance
);

module.exports = router;
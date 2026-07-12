const express = require("express");
const router = express.Router();

const vehicleController = require("../controllers/vehicleController");

const authMiddleware = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

// Get all vehicles
router.get("/", authMiddleware, vehicleController.getAllVehicles);

// Get vehicle by ID
router.get("/:id", authMiddleware, vehicleController.getVehicleById);

// Create vehicle
router.post(
    "/",
    authMiddleware,
    authorize("Admin", "Fleet Manager"),
    vehicleController.createVehicle
);

// Update vehicle
router.put(
    "/:id",
    authMiddleware,
    authorize("Admin", "Fleet Manager"),
    vehicleController.updateVehicle
);

// Delete vehicle
router.delete(
    "/:id",
    authMiddleware,
    authorize("Admin"),
    vehicleController.deleteVehicle
);

module.exports = router;
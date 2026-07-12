// const express = require("express");
// const router = express.Router();

// const driverController = require("../controllers/driverController");

// // Get all drivers
// router.get("/", driverController.getAllDrivers);

// // Get driver by ID
// router.get("/:id", driverController.getDriverById);

// // Create driver
// router.post("/", driverController.createDriver);

// // Update driver
// router.put("/:id", driverController.updateDriver);

// // Delete driver
// router.delete("/:id", driverController.deleteDriver);

// module.exports = router;
const express = require("express");
const router = express.Router();

const driverController = require("../controllers/driverController");

const authMiddleware = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

// Get all drivers
router.get("/", authMiddleware, driverController.getAllDrivers);

// Get driver by ID
router.get("/:id", authMiddleware, driverController.getDriverById);

// Create driver
router.post(
    "/",
    authMiddleware,
    authorize("Admin", "Fleet Manager"),
    driverController.createDriver
);

// Update driver
router.put(
    "/:id",
    authMiddleware,
    authorize("Admin", "Fleet Manager"),
    driverController.updateDriver
);

// Delete driver
router.delete(
    "/:id",
    authMiddleware,
    authorize("Admin"),
    driverController.deleteDriver
);

module.exports = router;
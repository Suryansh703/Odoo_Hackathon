// const express = require("express");
// const router = express.Router();

// const fuelController = require("../controllers/fuelController");

// // Get all fuel records
// router.get("/", fuelController.getAllFuelRecords);

// // Get fuel record by ID
// router.get("/:id", fuelController.getFuelRecordById);

// // Create fuel record
// router.post("/", fuelController.createFuelRecord);

// // Update fuel record
// router.put("/:id", fuelController.updateFuelRecord);

// // Delete fuel record
// router.delete("/:id", fuelController.deleteFuelRecord);

// module.exports = router;
const express = require("express");
const router = express.Router();

const fuelController = require("../controllers/fuelController");

const authMiddleware = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

router.get(
    "/",
    authMiddleware,
    authorize("Admin", "Fleet Manager", "Financial Analyst"),
    fuelController.getAllFuelRecords
);

router.get(
    "/:id",
    authMiddleware,
    authorize("Admin", "Fleet Manager", "Financial Analyst"),
    fuelController.getFuelRecordById
);

router.post(
    "/",
    authMiddleware,
    authorize("Admin", "Fleet Manager"),
    fuelController.createFuelRecord
);

router.put(
    "/:id",
    authMiddleware,
    authorize("Admin", "Fleet Manager"),
    fuelController.updateFuelRecord
);

router.delete(
    "/:id",
    authMiddleware,
    authorize("Admin"),
    fuelController.deleteFuelRecord
);

module.exports = router;
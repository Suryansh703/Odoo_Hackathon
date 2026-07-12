const express = require("express");
const router = express.Router();

const tripController = require("../controllers/tripController");

// Get all trips
router.get("/", tripController.getAllTrips);

// Get trip by ID
router.get("/:id", tripController.getTripById);

// Create trip
router.post("/", tripController.createTrip);

// Update trip
router.put("/:id", tripController.updateTrip);

// Delete trip
router.delete("/:id", tripController.deleteTrip);

module.exports = router;

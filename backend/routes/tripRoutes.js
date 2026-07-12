// const express = require("express");
// const router = express.Router();

// const tripController = require("../controllers/tripController");

// // Get all trips
// router.get("/", tripController.getAllTrips);

// // Get trip by ID
// router.get("/:id", tripController.getTripById);

// // Create a new trip
// router.post("/", tripController.createTrip);

// // Start a trip
// router.put("/:id/start", tripController.startTrip);

// // Complete a trip
// router.put("/:id/complete", tripController.completeTrip);

// // Cancel a trip
// router.put("/:id/cancel", tripController.cancelTrip);

// // Delete trip
// router.delete("/:id", tripController.deleteTrip);
// // Update trip
// router.put("/:id", tripController.updateTrip);

// module.exports = router;
 const express = require("express");
const router = express.Router();

const tripController = require("../controllers/tripController");

const authMiddleware = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

// Get all trips
router.get("/", authMiddleware, tripController.getAllTrips);

// Get trip by ID
router.get("/:id", authMiddleware, tripController.getTripById);

// Create trip
router.post(
    "/",
    authMiddleware,
    authorize("Admin", "Fleet Manager"),
    tripController.createTrip
);

// Update trip
router.put(
    "/:id",
    authMiddleware,
    authorize("Admin", "Fleet Manager"),
    tripController.updateTrip
);

// Delete trip
router.delete(
    "/:id",
    authMiddleware,
    authorize("Admin"),
    tripController.deleteTrip
);

module.exports = router;
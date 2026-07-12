const { Trip } = require("../models");

// Get All Trips
const getAllTrips = async (req, res) => {
    try {

        const trips = await Trip.find()
            .populate("vehicle")
            .populate("driver");

        res.status(200).json({
            success: true,
            count: trips.length,
            data: trips
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Get Trip By ID
const getTripById = async (req, res) => {
    try {

        const trip = await Trip.findById(req.params.id)
            .populate("vehicle")
            .populate("driver");

        if (!trip) {
            return res.status(404).json({
                success: false,
                message: "Trip not found"
            });
        }

        res.status(200).json({
            success: true,
            data: trip
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Create Trip
const createTrip = async (req, res) => {
    try {

        const trip = await Trip.create(req.body);

        res.status(201).json({
            success: true,
            message: "Trip created successfully",
            data: trip
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        });

    }
};

// Update Trip
const updateTrip = async (req, res) => {
    try {

        const trip = await Trip.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!trip) {
            return res.status(404).json({
                success: false,
                message: "Trip not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Trip updated successfully",
            data: trip
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        });

    }
};

// Delete Trip
const deleteTrip = async (req, res) => {
    try {

        const trip = await Trip.findByIdAndDelete(req.params.id);

        if (!trip) {
            return res.status(404).json({
                success: false,
                message: "Trip not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Trip deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Start Trip
const startTrip = async (req, res) => {
    try {

        const trip = await Trip.findByIdAndUpdate(
            req.params.id,
            { status: "Dispatched" },
            { new: true }
        );

        if (!trip) {
            return res.status(404).json({
                success: false,
                message: "Trip not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Trip started successfully",
            data: trip
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Complete Trip
const completeTrip = async (req, res) => {
    try {

        const trip = await Trip.findByIdAndUpdate(
            req.params.id,
            { status: "Completed" },
            { new: true }
        );

        if (!trip) {
            return res.status(404).json({
                success: false,
                message: "Trip not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Trip completed successfully",
            data: trip
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Cancel Trip
const cancelTrip = async (req, res) => {
    try {

        const trip = await Trip.findByIdAndUpdate(
            req.params.id,
            { status: "Cancelled" },
            { new: true }
        );

        if (!trip) {
            return res.status(404).json({
                success: false,
                message: "Trip not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Trip cancelled successfully",
            data: trip
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
    getAllTrips,
    getTripById,
    createTrip,
    updateTrip,
    deleteTrip,
    startTrip,
    completeTrip,
    cancelTrip
};
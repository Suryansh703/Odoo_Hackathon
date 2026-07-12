const { FuelLog } = require("../models");

// Get All Fuel Records
const getAllFuelRecords = async (req, res) => {
    try {
        const fuelLogs = await FuelLog.find().populate("vehicle");

        res.status(200).json({
            success: true,
            count: fuelLogs.length,
            data: fuelLogs
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get Fuel Record By ID
const getFuelRecordById = async (req, res) => {
    try {
        const fuelLog = await FuelLog.findById(req.params.id).populate("vehicle");

        if (!fuelLog) {
            return res.status(404).json({
                success: false,
                message: "Fuel record not found"
            });
        }

        res.status(200).json({
            success: true,
            data: fuelLog
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Create Fuel Record
const createFuelRecord = async (req, res) => {
    try {
        const fuelLog = await FuelLog.create(req.body);

        res.status(201).json({
            success: true,
            message: "Fuel record created successfully",
            data: fuelLog
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Update Fuel Record
const updateFuelRecord = async (req, res) => {
    try {
        const fuelLog = await FuelLog.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!fuelLog) {
            return res.status(404).json({
                success: false,
                message: "Fuel record not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Fuel record updated successfully",
            data: fuelLog
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Delete Fuel Record
const deleteFuelRecord = async (req, res) => {
    try {
        const fuelLog = await FuelLog.findByIdAndDelete(req.params.id);

        if (!fuelLog) {
            return res.status(404).json({
                success: false,
                message: "Fuel record not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Fuel record deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    getAllFuelRecords,
    getFuelRecordById,
    createFuelRecord,
    updateFuelRecord,
    deleteFuelRecord
};
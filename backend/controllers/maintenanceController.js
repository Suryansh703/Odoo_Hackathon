const { Maintenance } = require("../models");

// Get All Maintenance Records
const getAllMaintenance = async (req, res) => {
    try {

        const maintenance = await Maintenance.find()
            .populate("vehicle");

        res.status(200).json({
            success: true,
            count: maintenance.length,
            data: maintenance
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Get Maintenance By ID
const getMaintenanceById = async (req, res) => {
    try {

        const maintenance = await Maintenance.findById(req.params.id)
            .populate("vehicle");

        if (!maintenance) {
            return res.status(404).json({
                success: false,
                message: "Maintenance record not found"
            });
        }

        res.status(200).json({
            success: true,
            data: maintenance
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Create Maintenance Record
const createMaintenance = async (req, res) => {
    try {

        const maintenance = await Maintenance.create(req.body);

        res.status(201).json({
            success: true,
            message: "Maintenance record created successfully",
            data: maintenance
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        });

    }
};

// Update Maintenance Record
const updateMaintenance = async (req, res) => {
    try {

        const maintenance = await Maintenance.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!maintenance) {
            return res.status(404).json({
                success: false,
                message: "Maintenance record not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Maintenance updated successfully",
            data: maintenance
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        });

    }
};

// Complete Maintenance
const completeMaintenance = async (req, res) => {
    try {

        const maintenance = await Maintenance.findByIdAndUpdate(
            req.params.id,
            { status: "Completed" },
            { new: true }
        );

        if (!maintenance) {
            return res.status(404).json({
                success: false,
                message: "Maintenance record not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Maintenance completed successfully",
            data: maintenance
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Delete Maintenance Record
const deleteMaintenance = async (req, res) => {
    try {

        const maintenance = await Maintenance.findByIdAndDelete(req.params.id);

        if (!maintenance) {
            return res.status(404).json({
                success: false,
                message: "Maintenance record not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Maintenance record deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
    getAllMaintenance,
    getMaintenanceById,
    createMaintenance,
    updateMaintenance,
    completeMaintenance,
    deleteMaintenance
};
import mongoose from "mongoose";
import Vehicle from "../models/Vehicle.js";

export const createVehicle = async (req, res) => {
  try {
    const { model, licensePlate, vehicleType } = req.body;
    const ownerId = req.user.userId;

    if (!model || !licensePlate || !vehicleType) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const vehicle = new Vehicle({
      owner: ownerId,
      model,
      licensePlate,
      vehicleType,
    });

    await vehicle.save();
    res.status(201).json({ message: "Vehicle created successfully", data: vehicle });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating vehicle", error: error.message });
  }
};

export const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find().populate({ path: "owner", select: "_id name email" });
    res.status(200).json({ data: vehicles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching vehicles", error: error.message });
  }
};

export const getVehicle = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the provided id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid vehicle ID" });
    }
    const vehicle = await Vehicle.findById(id).populate({ path: "owner", select: "_id name email" });
    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    res.status(200).json({ data: vehicle });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching vehicle", error: error.message });
  }
};

export const updateVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const { model, licensePlate, vehicleType } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid vehicle ID" });
    }

    const vehicle = await Vehicle.findById(id);
    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    vehicle.model = model || vehicle.model;
    vehicle.licensePlate = licensePlate || vehicle.licensePlate;
    vehicle.vehicleType = vehicleType || vehicle.vehicleType;

    await vehicle.save();
    res.status(200).json({ message: "Vehicle updated successfully", data: vehicle });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating vehicle", error: error.message });
  }
};

// Delete Vehicle
export const deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid vehicle ID" });
    }

    const deletedVehicle = await Vehicle.findByIdAndDelete(id);

    if (!deletedVehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    res.status(200).json({ message: "Vehicle deleted successfully", data: deletedVehicle });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting vehicle", error: error.message });
  }
};
import mongoose from "mongoose";
import ParkingSpot from "../models/ParkingSpot.js";

export const createParkingSpot = async (req, res) => {
  try {
    const { name, description, location, spotType, pricePerHour, capacity, features, imageUrls } = req.body;

    if (!name || !location || !spotType || !pricePerHour || !capacity) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const parkingSpot = new ParkingSpot({
      name,
      description,
      location,
      spotType,
      pricePerHour,
      capacity,
      features,
      imageUrls,
    });

    await parkingSpot.save();
    res.status(201).json({ message: "Parking spot created successfully", data: parkingSpot });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating parking spot", error: error.message });
  }
};

export const getParkingSpots = async (req, res) => {
  try {
    const parkingSpots = await ParkingSpot.find();
    res.status(200).json({ data: parkingSpots });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching parking spots", error: error.message });
  }
};

export const getParkingSpot = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid parkingSpot ID" });
    }

    const parkingSpot = await ParkingSpot.findById(id);
    if (!parkingSpot) {
      return res.status(404).json({ message: "Parking spot not found" });
    }

    res.status(200).json({ data: parkingSpot });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching parking spot", error: error.message });
  }
};

export const updateParkingSpot = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid parkingSpot ID" });
    }

    const parkingSpot = await ParkingSpot.findById(id);
    if (!parkingSpot) {
      return res.status(404).json({ message: "Parking spot not found" });
    }

    const updateFields = ["name", "description", "location", "pricePerHour", "features", "imageUrls"];

    for (const field of updateFields) {
      if (req.body[field] !== undefined) {
        parkingSpot[field] = req.body[field];
      }
    }

    // Handle capacity separately since it's an object
    if (req.body.capacity) {
      if (req.body.capacity.car !== undefined) {
        parkingSpot.capacity.car = req.body.capacity.car;
      }
      if (req.body.capacity.bike !== undefined) {
        parkingSpot.capacity.bike = req.body.capacity.bike;
      }
    }

    await parkingSpot.save();
    res.status(200).json({ message: "Parking spot updated successfully", data: parkingSpot });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating parking spot", error: error.message });
  }
};

export const deleteParkingSpot = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid parkingSpot ID" });
    }

    const deletedParkingSpot = await ParkingSpot.findByIdAndDelete(id);
    if (!deletedParkingSpot) {
      return res.status(404).json({ message: "Parking spot not found" });
    }

    res.status(200).json({ message: "Parking spot deleted successfully", data: deletedParkingSpot });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting parking spot", error: error.message });
  }
};

import mongoose from "mongoose";

import ParkingSpot from "../models/ParkingSpot.js";
import Reservation from "../models/Reservation.js";
import Vehicle from "../models/Vehicle.js";
import User from "../models/User.js";

export const createReservation = async (req, res) => {
  try {
    const { parkingSpotId, vehicleId, startTime, endTime, arrivalTime } = req.body;
    const customerId = req.user.userId;

    if (!parkingSpotId || !vehicleId || !startTime || !endTime || !arrivalTime) {
      return res.status(400).json({ message: "All Fields are required" });
    }

    const parkingSpot = await ParkingSpot.findById(parkingSpotId);
    if (!parkingSpot) {
      return res.status(404).json({ message: "Parking spot not found" });
    }

    const vehicle = await Vehicle.findById(vehicleId);
    if (!vehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    const customer = await User.findById(customerId);
    if (!customer) {
      return res.status(404).json({ message: "User not found" });
    }

    const vehicleType = vehicle.vehicleType;
    const totalCapacity = parkingSpot.capacity[vehicleType];

    // Count the existing reservations for the same vehicle type
    const existingReservations = parkingSpot.reservations[vehicleType];
    if (existingReservations.length >= totalCapacity) {
      return res.status(400).json({ message: "Reservation is full" });
    }

    const pricePerHour = parkingSpot.pricePerHour;

    // Calculate the total cost based on the hourly rate and duration
    // There are 60 seconds in a minute, 60 minutes in an hour, and 1000 milliseconds in a second, so this expression converts milliseconds to hours.
    // const durationInHours = (endTime - startTime) / (60 * 60 * 1000);

    const sT = new Date(startTime); // Convert to Date
    const eT = new Date(endTime); // Convert to Date

    // Check if the conversion resulted in valid Date objects
    if (isNaN(sT) || isNaN(eT)) {
      return res.status(400).json({ message: "Invalid date format" });
    }

    // Calculate the total cost based on the hourly rate and duration
    const durationInHours = (eT - sT) / (60 * 60 * 1000);
    if (isNaN(durationInHours) || durationInHours < 0) {
      return res.status(400).json({ message: "Invalid time range" });
    }

    const totalCost = pricePerHour * durationInHours;

    const reservation = new Reservation({
      parkingSpot: parkingSpotId,
      customer: customerId,
      vehicle: vehicleId,
      startTime: sT,
      endTime: eT,
      arrivalTime,
      totalCost,
    });

    if (reservation.arrivalTime <= reservation.startTime) {
      reservation.status = "Confirmed";
    } else {
      reservation.status = "Pending";
    }

    await reservation.save();

    parkingSpot.reservations[vehicleType].push(reservation._id);
    await parkingSpot.save();

    customer.reservations.push(reservation._id);
    await customer.save();

    res.status(201).json({ message: "Reservation created successfully", data: reservation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating reservation", error: error.message });
  }
};

export const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find()
      .populate({
        path: "parkingSpot",
      })
      .populate({
        path: "vehicle",
      })
      .populate({
        path: "customer",
      });

    res.status(200).json({ data: reservations });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching reservations", error: error.message });
  }
};

export const getReservation = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid reservation ID" });
    }

    const reservation = await Reservation.findById(id)
      .populate({
        path: "customer",
        select: "_id name email",
      })
      .populate({
        path: "parkingSpot",
        select: "_id name location pricePerHour",
      })
      .populate({
        path: "vehicle",
        select: "_id model licensePlate vehicleType",
        populate: {
          path: "owner",
          select: "_id name email",
        },
      });

    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }

    res.status(200).json({ data: reservation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching reservation", error: error.message });
  }
};

export const updateReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const { parkingSpotId, vehicleId, startTime, endTime } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid reservation ID" });
    }

    const reservation = await Reservation.findOne({ _id: id });

    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }

    const parkingSpot = await ParkingSpot.findById(parkingSpotId);
    if (!parkingSpot) {
      return res.status(404).json({ message: "Parking spot not found" });
    }

    const pricePerHour = parkingSpot.pricePerHour;
    const durationInHours = (endTime - startTime) / (60 * 60 * 1000);
    const totalCost = pricePerHour * durationInHours;

    // Update specific fields
    reservation.parkingSpot = parkingSpotId;
    reservation.vehicle = vehicleId;
    reservation.startTime = startTime;
    reservation.endTime = endTime;
    reservation.totalCost = totalCost;

    await reservation.save();
    res.status(200).json({ message: "Reservation updated successfully", data: reservation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating reservation", error: error.message });
  }
};

export const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid reservation ID" });
    }

    const deletedReservation = await Reservation.findByIdAndDelete(id);

    if (!deletedReservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }

    res.status(200).json({ message: "Reservation deleted successfully", data: deletedReservation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting reservation", error: error.message });
  }
};

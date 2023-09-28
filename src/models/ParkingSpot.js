import mongoose from "mongoose";

// const parkingSpotSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     description: String,
//     location: String,
//     available: {
//       type: Boolean,
//       default: true,
//     },
//     spotType: {
//       type: String,
//       enum: ["Indoor", "Open", "Electric", "Other"],
//       default: "Open",
//     },
//     pricePerHour: {
//       type: Number,
//       required: true,
//     },
//     capacity: {
//       car: {
//         type: Number,
//         default: 10,
//       },
//       bike: {
//         type: Number,
//         default: 50,
//       },
//     },
//     features: {
//       type: [String],
//       enum: [
//         "Security Cameras",
//         "Covered",
//         "EV Charging",
//         "Close to Mall",
//         "Spacious",
//         "Motorcycle Only",
//         "Scenic View",
//         "Handicapped Accessible",
//         "Truck Parking",
//         "Guest Parking",
//       ],
//       default: [],
//     },
//     imageUrls: [String],
//     owner: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//     },

//     reservations: {
//       car: [
//         {
//           type: mongoose.Schema.Types.ObjectId,
//           ref: "Reservation",
//         },
//       ],
//       bikeReservations: [
//         {
//           type: mongoose.Schema.Types.ObjectId,
//           ref: "Reservation",
//         },
//       ],
//     },
//   },
//   { timestamps: true }
// );

// const ParkingSpot = mongoose.model("ParkingSpot", parkingSpotSchema);

// export default ParkingSpot;

const parkingSpotSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: String,
    location: String,
    available: {
      type: Boolean,
      default: true,
    },
    spotType: {
      type: String,
      enum: ["Indoor", "Open", "Electric", "Other"],
      default: "Open",
    },
    pricePerHour: {
      type: Number,
      required: true,
    },
    capacity: {
      car: {
        type: Number,
        default: 10,
      },
      bike: {
        type: Number,
        default: 50,
      },
    },
    features: {
      type: [String],
      enum: [
        "Security Cameras",
        "Covered",
        "EV Charging",
        "Close to Mall",
        "Spacious",
        "Motorcycle Only",
        "Scenic View",
        "Handicapped Accessible",
        "Truck Parking",
        "Guest Parking",
      ],
      default: [],
    },
    imageUrls: [String],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    reservations: {
      car: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Reservation",
        },
      ],
      bike: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Reservation",
        },
      ],
    },
  },
  { timestamps: true }
);

const ParkingSpot = mongoose.model("ParkingSpot", parkingSpotSchema);

export default ParkingSpot;

import cookieParser from "cookie-parser";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

import connectToDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import spotsRoutes from "./routes/parkingSpotRoutes.js";
import vehiclesRoutes from "./routes/vehicleRoutes.js";
import reservationsRoutes from "./routes/reservationsRoute.js";

dotenv.config();
const app = express();

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/spots", spotsRoutes);
app.use("/vehicles", vehiclesRoutes);
app.use("/reservations", reservationsRoutes);

// Define an async function to start the server and connect to the database
async function startServer() {
  try {
    await connectToDB();
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

startServer();

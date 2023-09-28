import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

import connectToDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import spotsRoutes from "./routes/parkingSpotRoutes.js";
import vehiclesRoutes from "./routes/vehicleRoutes.js";
import reservationsRoutes from "./routes/reservationsRoute.js";

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());

app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/spots", spotsRoutes);
app.use("/vehicles", vehiclesRoutes);
app.use("/reservations", reservationsRoutes);

await connectToDB();

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

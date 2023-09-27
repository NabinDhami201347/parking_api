import User from "../models/User.js";

export const getProfile = async (req, res) => {
  try {
    const userId = req.user.userId;
    const profile = await User.findById(userId).select("-password");
    if (!profile) {
      return res.status(404).json({ message: "User profile not found" });
    }

    res.json({ profile });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

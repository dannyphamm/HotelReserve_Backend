import express from "express";
import { createHotel, deleteHotel, getHotels, getHotel, updateHotel } from "../controllers/hotels.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create a new hotel
router.post("/", verifyAdmin, createHotel)

// Update a hotel
router.put("/:id", verifyAdmin,  updateHotel)

// Delete a hotel
router.delete("/:id", verifyAdmin, deleteHotel)

// Find a hotel
router.get("/:id", getHotel)

// Find all hotels
router.get("/", getHotels)

export default router;
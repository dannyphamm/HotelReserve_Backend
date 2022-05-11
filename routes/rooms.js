import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/rooms.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
// Create a new room
router.post("/:hotelid", verifyAdmin, createRoom)

// Update a room
router.put("/:id", verifyAdmin,  updateRoom)

// Delete a room
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom)

// Find a room
router.get("/:id", getRoom)

// Find all rooms
router.get("/", getRooms)

export default router;
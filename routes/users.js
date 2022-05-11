import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/users.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
// router.get("/checkauthentication", verifyToken, (req, res) => {
//     res.send("You are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req, res) => {
//     res.send("Hello, user, you are logged in and you can delete your account") 
// })

// router.get("/checkadmin/:id", verifyAdmin, (req, res) => {
//     res.send("Hello, user, you are logged in and you can delete all accounts") 
// })

// Update a user
router.put("/:id", verifyUser, updateUser)

// Delete a user
router.delete("/:id", verifyUser, deleteUser)

// Find a user
router.get("/:id", verifyUser,  getUser)

// Find all users
router.get("/", verifyAdmin, getUsers)

export default router;
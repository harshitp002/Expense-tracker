const express = require("express");
const { registerUser, loginUser, getUserInfo } = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware"); 
const upload = require('../middleware/uploadMiddleware');

const router = express.Router();

// Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
// router.get("/getUser", protect, getUserInfo);

module.exports = router;
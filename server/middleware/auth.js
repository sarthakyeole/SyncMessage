import User from "../models/User.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

// middleware to protect routes
export const protectRoute = async (req, res, next) => {
  try {
    const token = req.headers.token

    if (!token) {
      return res.json({ success: false, message: "jwt must be provided" })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decoded.userId).select("-password")

    if (!user) {
      return res.json({ success: false, message: "User not found" })
    }
    req.user = user
    next()
  } catch (error) {
    console.log(error.message)
    res.json({ success: false, message: error.message })
  }
}

// Controller to check if user is authenticated

export const checkAuth = (req, res) => {
  res.json({
    success: true,
    user: req.user,
  })
}

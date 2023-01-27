import express from "express"
import { login,register } from "../controllers/authController.js"
const router = express.Router()


router.post("/auth/login",login)
router.post("/register",register)

export default router

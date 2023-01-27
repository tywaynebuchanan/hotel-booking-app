import express from 'express';
const router = express.Router();
import { getUsers, getUserById} from '../controllers/authController.js';
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

router.get("/users",verifyAdmin,getUsers)
router.get("/user/:id",getUserById)


export default router;
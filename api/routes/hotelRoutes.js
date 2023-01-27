import express from 'express';
const router = express.Router();
import { 
    getAllHotels, 
    getHotel, 
    createHotel, 
    deleteHotel, 
    updateHotel, 
    CountByCity,
    CountByType,
} from '../controllers/hotelController.js';

import { verifyAdmin } from '../utils/verifyToken.js';

//Create 
router.post("/create", verifyAdmin,createHotel)

//update
router.put("/update/:id",verifyAdmin,updateHotel)
//get
router.get("/hotel/:id",getHotel)

//get all
router.get("/hotels",getAllHotels)

//delete 
router.put("/delete/:id",verifyAdmin,deleteHotel)

router.get("/countbycity",CountByCity)
router.get("/countbytype",CountByType)
// router.get("/featured",Featured)

export default router;
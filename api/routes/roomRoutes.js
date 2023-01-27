import express from 'express'
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from '../controllers/roomController.js'
const router = express.Router()

//create
router.post("/createroom/:hotelid",createRoom)

//get
router.get("/room/:id",getRoom)
//get all
router.get("/rooms",getAllRooms)
//delete
router.delete("/deleteroom/:id/:hotelid",deleteRoom)
//update
router.put("/updateroom/:id",updateRoom)




export default router
import Room from '../models/roomModels.js'
import Hotel from '../models/hotelModels.js'
import { createError } from '../utils/error.js'

//create
export const createRoom = (async(req,res,next)=>{
    const hotelid = req.params.hotelid
    const newRoom = new Room(req.body)

    try {
        const savedRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelid,{
                $push:{ rooms: savedRoom._id}
            })

        } catch (error) {
            next(error)
        }
        res.status(200).json({
            status: "success",
            message:"Room was saved"

        })
    } catch (error) {
        next(error)
    }
})

//update
export const updateRoom = (async(req,res,next)=>{
    try {
        const update = await Room.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
            )
        res.status(201).json({
            status: "success",
            message: "The room was updated"
        })
    } catch (error) {
        res.status(401).json({
            status: "failed",
            message: "Failed to update"
        })
    }
})
//delete
export const deleteRoom = async(req,res,next)=>{
    const hotelid = req.params.hotelid
    try {
        await Room.findByIdAndDelete(req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelid, {
                $pull: { rooms: req.params.id },
              });
        } catch (error) {
            next();
        }
        res.status(200).json({
            status: "success",
            message:"Room was deleted"
        })
    } catch (error) {
        next()
    }
    
}
//get

export const getRoom = (async(req,res,next)=>{
    try {
        const getroom = await Room.findById(req.params.id)
        res.status(200).json({
            status: "success",
            NoRooms: getroom.length,
            data:{
                getroom
            }
        })
    } catch (error) {
        res.status(401).json({
            status: "failed",
            message: "Failed to get rooms"
        })
    }
})

//get all

export const getAllRooms = (async(req,res,next)=>{
    try {
        const getallroom = await Room.find()
        res.status(200).json({
            status: "success",
            NoRooms: getallroom.length,
            data:{
                getallroom
            }
        })
    } catch (error) {
        res.status(401).json({
            status: "failed",
            message: "Failed to get rooms"
        })
    }
})

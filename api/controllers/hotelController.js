import Hotel from '../models/hotelModels.js';
import { createError } from '../utils/error.js';


//Create 
export const createHotel = async(req,res,next)=>{

    const getHotel = new Hotel(req.body)
    try {
        const newHotel = await getHotel.save();
        res.status(200).json({
            status: "success",
            data:{
                newHotel
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "failed",
            message: error
        })
    }
};

//delete
export const deleteHotel = async (req,res,next)=>{
    try {
        const deleteHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
            )
        res.status(201).json({
            status: "success",
            message: "The hotel was deleted"
        })
    } catch (error) {
        res.status(401).json({
            status: "failed",
            message: "Failed to delete the hotel"
        })
    }
};

//update
export const updateHotel = async (req,res,next)=>{
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            {$set: req.body},
            {new: true}
            )
        res.status(200).json({
            status: "success",
            data:{
                updateHotel
            }
        })
    } catch (error) {
        res.status(401).json({
            status: "failed",
            message: error
        })
    }
};

//get
export const getHotel = async (req,res,next)=>{

    
    try {
        const getHotel = await Hotel.findById(req.params.id)
        res.status(200).json(getHotel)
    } catch (error) {
        res.status(401).json({
            status: "failed",
            message: error
        })
    }
};

//get all
export const getAllHotels = async (req,res,next)=>{
    const {min,max,...others} = req.query

    try {
        const getAllHotels = await Hotel.find({ ...others, cheapestRoom:{$gt: min | 1, $lte: max || 999 }
        }).limit(req.query.limit);
        if(!getAllHotels){
            return next (createError(400,"No hotels found"))
        }
        res.status(200).json([getAllHotels])
    } catch (error) {
        res.status(401).json({
            status: "failed",
            message: error
        })
    }
    
};

export const CountByCity = async (req,res,next)=>{
    const cities = req.query.cities.split(",")
    try {
        const list = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json({
            status: "success",
            list
        })
    } catch (error) {
        
    }
    
};


export const CountByType = async (req,res,next)=>{
    try {
        const motelcount = await Hotel.countDocuments({type: "Motel"})
        const hotelcount = await Hotel.countDocuments({type: "Hotel"})
        const villacount = await Hotel.countDocuments({type: "Villas"})
        const abbcount = await Hotel.countDocuments({type: "AirBnB"})
        const cabanacount = await Hotel.countDocuments({type:"cabana"})
        res.status(200).json([
            {status: "success",type: "motel",count: motelcount},
            {status: "success",type: "hotel",count: hotelcount},
            {status: "success",type: "villa",count: villacount},
            {status: "success",type: "airbnb",count: abbcount},
            {status: "success",type: "cabana",count: cabanacount}
    ])
    } catch (error) {
        next(error)
    }
    
};


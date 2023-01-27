import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema({
  
    name: {
        type: String,
        required: [true,"A hotel name is required"],
        unique: true
    },

    type: {
        type: String,
        required: [true,"A type is required"]
    },

    address:{
        type: String,
        required: [true, "An address is required"]
    },
    city:{
        type: String,
        required: [true, "A city is required"]
    },
    parish: {
        type: String,
        required: [true, "A parish is required"]
    },
    photos:{
        type: [String]
    },
    desc:{
        type: String,
        min: [8, "The hotel description is too short"]
    },
    ratings:{
        type: Number,
        min: 0,
        max: 5,
        default: 0
    }, 
    rooms:{
        type: [String]
    },
    cheapestRoom:{
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }


}, {timestamps: true});

export default mongoose.model('Hotel', HotelSchema);
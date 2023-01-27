import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
  
    title: {
        type: String,
        required: [true,"A Room name is required"],
    },

    price: {
        type: Number,
        required: [true,"A price for the room is required"]
    },

    desc:{
        type: String,
        required: [true, "A description of the room is required"]
    },
    maxPeople:{
        type: Number,
        required: [true, "The number of people is required"]
    },
 
    roomNumbers:[{
        number: Number,
        unavailableDates:[{
             type: [Date]
        }]
    }],
    isDeleted: {
        type: Boolean,
        default: false
    }


}, {timestamps: true});

export default mongoose.model('Room', RoomSchema);
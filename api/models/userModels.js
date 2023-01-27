import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  
    username: {
        type: String,
        required: [true,"A username is required"],
        unique: true
    },
    email:{
        type: String,
        required: [true,"An email is required"]
    },

    name: {
        type: String,
        required:[true,"A name is required"]
    },

    password: {
        type: String,
        required: [true,"A password is required"],
        min: 6,
        select: false
    },

    isAdmin:{
        type: Boolean,
        default: "false"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }


}, {timestamps: true});

export default mongoose.model('User', UserSchema);
import mongoose from 'mongoose';
import dotenv from "dotenv"
dotenv.config();
const DBURI = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DBPASSWORD
);

mongoose.connect(DBURI,{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})

mongoose.set('strictQuery',true)

const DB = mongoose.connection;
export default DB;
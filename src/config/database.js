import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/users'

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Database connection failed', error);
        process.exit(1);
    }
};

export default connectDB;
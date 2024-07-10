import {MongoClient} from 'mongodb';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const url = process.env.DB_CONNECTION?? "";

export async function initDB() {
    mongoose.set('strictQuery', false);
    await mongoose.connect(url);
};
import {MongoClient} from 'mongodb';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const url = process.env.DB_CONNECTION?? "";
<<<<<<< HEAD
=======

>>>>>>> c087ff499e6c90edc0a297b01dd76a0299f8d877
export async function initDB() {
    mongoose.set('strictQuery', false);
    await mongoose.connect(url);
};
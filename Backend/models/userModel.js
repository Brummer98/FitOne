import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    calories: {
        type: Number
    },
    weight: {
        type: Number
    },
    age: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
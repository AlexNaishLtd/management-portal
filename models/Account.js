import mongoose from 'mongoose';
const validator = require('validator');

const accountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, 'Name cannot be less than 3 characters.']
    },
    contact_email: {
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: 'Please ensure the email is valid.'
        },
        contact_number: {
            type: Number,
            required: true
        }
    }
});

module.exports = accountSchema;

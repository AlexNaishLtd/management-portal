import mongoose from 'mongoose';
import { isEmail } from 'validator';

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
            validator: isEmail,
            message: 'Please ensure the email is valid.'
        }
    },
    contact_number: {
        type: String,
        required: true
    }
});

export default mongoose.models.Account || mongoose.model('Account', accountSchema);

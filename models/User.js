import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Please provide a name.'],
        minlength: [2, 'Name cannot be less than 2 characters.']
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: [true, 'Please provide an email.']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password.']
    }
});

export default mongoose.models.User || mongoose.model('User', UserSchema);

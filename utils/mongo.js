import mongoose from 'mongoose';

export const connectionMiddleware = async (req, res, next) => {
    if (mongoose.connections[0].readyState) {
        // Use current db connection
        return next();
    }
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        await next();
    } catch (error) {
        console.log('Database error', error);
        res.status(500).json({ error: 'Failed to connect to database.' });
    }
};

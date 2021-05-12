import mongoose from 'mongoose';

export const connectionMiddleware = async (req, res, next) => {
    const { context } = req.netlifyFunctionParams || {};

    // Lambda functions automatically wait for any external connections to close
    // As we're not manually disconnecting from mongodb
    // because we want to reuse the connection (if possible!)
    // We need to tell Netlify / AWS to respond as soon as we call res.send / res.json
    // callbackWaitsForEmptyEventLoop -> false forces that behaviour
    if (context) {
        context.callbackWaitsForEmptyEventLoop = false;
    }

    if (mongoose.connections[0].readyState) {
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

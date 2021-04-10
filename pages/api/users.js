import nc from 'next-connect';

import User from '../../models/User';
import { connectionMiddleware } from '../../utils/mongo';

const cleanseVariable = (param) => {
    return decodeURIComponent(param.toString()).replace(/([^a-z0-9_\-.%@ ]+)/gi, '-');
};

const helloGetHandler = async (req, res) => {
    try {
        const { email, last } = req.query;
        const cursorFilter = last ? { _id: { $gt: last } } : {};
        const emailFilter = email
            ? {
                  email: {
                      $regex: cleanseVariable(email),
                      $options: 'i'
                  }
              }
            : {};

        const users = await User.find({ ...emailFilter, ...cursorFilter }, 'name email', {
            limit: 20,
            sort: { _id: 1, email: 1 }
        });
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        res.status(400).json({ success: false });
    }
};

export default nc().use(connectionMiddleware).get(helloGetHandler);

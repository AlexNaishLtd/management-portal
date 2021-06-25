import nc from 'next-connect';

import AccountModel from '../../models/Account';
import { connectionMiddleware } from '../../utils/mongo';

const listAccountsHandler = async (req, res) => {
    try {
        const accounts = await AccountModel.find({}, 'name contact_email', {
            limit: 20
        });

        return res.status(200).json(accounts);
    } catch (error) {
        return res.status(500).json({ success: false });
    }
};

export default nc().use(connectionMiddleware).get(listAccountsHandler);

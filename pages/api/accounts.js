import nc from 'next-connect';

import Account from '../../models/Account';
import { connectionMiddleware } from '../../utils/mongo';

const listAccountsHandler = async (req, res) => {
    try {
        const accounts = await Account.find({}, 'name contact_email', {
            limit: 20
        });

        return res.status(200).json(accounts);
    } catch (error) {
        return res.status(500).json({ success: false });
    }
};

const createAccountHandler = async (req, res) => {
    const newAccount = new Account({
        name: req.body.name,
        contact_email: req.body.contact_email,
        contact_number: req.body.contact_number
    });

    try {
        await newAccount.validate();
    } catch (error) {
        return res.status(400).json({
            error
        });
    }

    await newAccount.save();
    return res.status(200).json(newAccount);
};

export default nc().use(connectionMiddleware).get(listAccountsHandler).post(createAccountHandler);

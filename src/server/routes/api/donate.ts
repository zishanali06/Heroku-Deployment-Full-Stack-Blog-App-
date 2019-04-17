import * as express from 'express';
import * as stripeLoader from 'stripe';
import config from '../../config'

const router = express.Router();

const stripe = new stripeLoader(config.stripe.secretapi);

const charge = (token: string, amt: number) => {
    return stripe.charges.create({
        amount: amt * 100,
        currency: 'usd',
        source: token,
        description: 'Charged for Zishans Cosulting Service'
    });
};

router.post('/', async (req, res, next) => {
    try{
        let data = await charge(req.body.token.id, req.body.amount);
        console.log(data);
        res.status(200).json(`Card Charged for ${req.body.amount}`);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

export default router;
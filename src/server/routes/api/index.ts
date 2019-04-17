import * as express from 'express';
import * as passport from 'passport';

//api route imports
import apiBlogRoutes from './blogs';
import apiDonateRoutes from './donate';
import emailRoutes from './email';

const router = express.Router();

router.use('/donate', apiDonateRoutes);
router.use('/contact', emailRoutes);

router.use((req, res, next) => {
    passport.authenticate('bearer', { session: false}, (err, user, info) => {
        if(err) console.log(err);
        if(user) req.user = user;
        return next();
    })(req, res, next);
});

router.use('/blogs', apiBlogRoutes);

export default router;
import { Router } from 'express';
import * as passport from 'passport';
import chirpsRouter from './chirps';

const router = Router();

router.use((req, res, next) => {
    passport.authenticate('bearer', { session: false }, (err, user, info) => {
        if (user) req.user = user;
        return next();
    })(req, res, next);
});

router.use('/chirps', chirpsRouter);

export default router;
import { Router } from 'express';
import knex from '../../db';
import { CreateToken } from '../../utils/security/tokens';
import { HashPassword } from '../../utils/security/passwords';

const router = Router();

router.post('/', async (req, res) => {
    try {
        let user = req.body;
        user.password = HashPassword(req.body.password);
        let [userid] = await knex('users').insert(user);
        let token = await CreateToken({ userid });
        res.json({
            token,
            role: 'guest',
            userid
        });
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
});

export default router;
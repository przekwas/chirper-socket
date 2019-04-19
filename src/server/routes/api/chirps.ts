import { Router } from 'express';
import { io } from '../../server';
import knex from '../../db';
import { RequestHandler } from 'express-serve-static-core';

const isAdmin: RequestHandler = (req, res, next) => {
    if (!req.user || req.user.role !== 'guest') {
        return res.sendStatus(401);
    } else {
        return next();
    }
};

const router = Router();

router.get('/:id?', async (req, res) => {
    let id = req.params.id;
    try {
        if (id) {
            let [chirp] = await knex('chirps').select().where('id', id);
            res.json(chirp);
        } else {
            let chirps = await knex('chirps').select().orderBy('_created', 'desc');
            res.json(chirps);
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.post('/', isAdmin, async (req, res) => {
    try {
        let newId = await knex('chirps').insert(req.body);
        io.emit('newChirp');
        res.json(`Chirp ${newId} added!`);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

export default router;
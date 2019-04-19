import { Router } from 'express';
import { io } from '../../server';
import knex from '../../db';

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

router.post('/', async (req, res) => {
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
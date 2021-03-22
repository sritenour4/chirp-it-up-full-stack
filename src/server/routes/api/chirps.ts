import * as express from 'express';
import db from "../../db";

const router = express.Router();

// get one chirp by id
// GET http://localhost:3000/api/chirps/123
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const [chirp] = await db.chirps.one(id);
        res.json(chirp);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Something went wrong', error: error.message })
    }
});

// get all chirps
// GET http://localhost:3000/api/chirps/
router.get('/', async (req, res) => {
    try {
        const chirps = await db.chirps.all();
        res.json(chirps);
    } catch(error) {
        console.log(error);
        res.status(500).json({ msg: 'Something went wrong', error: error.message });
    }
})

// create a new chirp
// POST http://localhost:3000/api/chirps/
// { name: string, message: string}
router.post('/add', async (req, res) => {
    const newChirp = req.body;
    try {
        const newChirpRes = await db.chirps.post(newChirp.userid, newChirp.content, newChirp.location)
        res.json({ msg: 'added new chirp',  newChirpRes});
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Something went wrong', error: error.message });
    }
});


// edit a chirp
// PUT http://localhost:3000/api/chirps/123
// { name: string, message: string}
router.put('/:id', async (req, res) => {
    const chirpid = req.params.id;
    const editedChirp = req.body.content;    
    try {
        await db.chirps.put(chirpid, editedChirp);
        res.json({ msg: 'single chirp by id ' + chirpid });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Something went wrong', error: error.message });
    };
});

// delete a chirp
// DELETE http://localhost:3000/api/chirps/123
router.delete('/:id', async (req, res) => {
    const chirpid = req.params.id;
    try {
        res.json({ msg: 'deleted chirp by id ' + chirpid });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Something went wrong', error: error.message });
    }
});


export default router;
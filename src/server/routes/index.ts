import * as express from 'express';
import apiRouter from './api';

const router = express.Router();

router.use('/api', apiRouter);
// router.get('api/chirps', async (req, res) => {
//     try {
//         res.json(await db.chirps.all())
//     } catch(error) {
//         console.log(error);
//         res.sendStatus(500);
//     }
// })

export default router;
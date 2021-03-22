import * as express from 'express';
import db from "../../db";

const router = express.Router();

router.get('/:id?', async (req, res) => {
    const id = req.params.id;
    try {
        const [user] = await db.users.one(id);
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Something went wrong', error: error.message })
    }
});

// get one user by name
router.get("/one/:name", async (req, res) => {
    const name = req.params.name;    
    try {
        const [user] = await db.users.findUserByName(name);
        if (user) {
            res.json(user);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        console.log(error);
        res.send(error);        
    }
});


router.post("/", async (req, res) => {
    const user = req.body;

    try {
        const userRes = await db.users.post(user.name, user.email, user.password);
        res.json(userRes);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Something went wrong', error: error.message })
    }
});

export default router;




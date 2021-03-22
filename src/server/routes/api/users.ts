import * as express from 'express';
import db from "../../db";

const router = express.Router();

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
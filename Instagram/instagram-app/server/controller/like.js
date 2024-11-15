import { Router } from 'express';
import Like from '../model/like.js';
import auth from '../middleware/auth.js';


const router = Router();

// Naujo įrašo sukūrimas

router.get('/', auth, async (req, res) => {

    try { 
        const data = await Like.find()
        res.json(data);
    }

    catch {
        res.send('nepavyko rasti like')
    }
});

router.delete('/', auth, async (req, res) => {

    try { 
        const data = await Like.findOneAndDelete(req.body)
        res.json(data);
    }

    catch {
        res.send('nepavyko rasti like')
    }
});

router.post('/', auth, async (req, res) => {
    try {
        const data = await Like.findOne(req.body);

        //tikriname ar nebuvo priskirtas
        if(!data) {
            await Like.create(req.body); // jeigu nebuvo, noresime ji prideti
        }
        else {
            await data.deleteOne(); // jeigu buvo priskirtas, noresime pasalinti
        }
        res.json('Irasas issaugotas')
    }
    catch (e) {
        console.log(e);
        res.status(500).json('Ivyko klaida');
    }

});

export default router;

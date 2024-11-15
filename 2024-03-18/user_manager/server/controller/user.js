import { Router } from 'express';
import User from '../model/user.js';
import upload from '../middleware/multer.js';

const router = Router(); // gali buti app, taciau router del skirtumo, kad maytusi, kad esame viduje kontrolerio

router.get('/', async (req, res) => {
    // visu irasu grazinimas
    try {

        res.json(await User.find());

        } catch {
            res.sendStatus(500).json('Ivyko klaida');
        }

});

router.get('/:id' , async (req, res) => {
    // vieno iraso paemimas
    try {

        res.json(await User.findById(req.params.id));
    
        } catch {
            res.sendStatus(500).json('Ivyko klaida');
        }
});

router.post('/', upload.single('photo'), async (req, res) => {

    try {

        req.body.photo = req.file?.filename;
       
        await User.create(req.body);
    
        res.send('irasas atnaujintas');
    
        } catch {
            res.sendStatus(500).json('Ivyko klaida');
        }

    // naujo vartotojo sukurimas

    // req.body.photo = req.file.filename ? req.file.filename : "";
    // req.body.photo = req.file?.filename;



    // await User.create(req.body);
    // await User.create({
    //     name : "labas", 
    //     last_name: "This",
    //     email : "abathis@gmail.com",
    //     password: "reila"
    // })
    
});

router.put('/:id', upload.single('photo'), async (req, res) => {

    try {

        console.log(req.params.id, req.body)

        await User.findByIdAndUpdate(req.params.id, req.body);
    
        res.json('irasas atnaujintas');
    
        } catch {
            res.sendStatus(500).json('Ivyko klaida');
        }
});

// app.put('/:id', async (req, res) => {

//     await User.findByIdAndUpdate('67064177de577148b08cb6af', {
//         name : 'Zara'
//     });

//     res.send('irasas atnaujintas');

// });

router.delete('/:id', async (req, res) => {

    try {

        res.json(await User.findByIdAndDelete(req.params.id));
    
        res.send('irasas istrintas');
    
        } catch {
            res.sendStatus(500).json('Ivyko klaida');
        }

 });

 export default router;
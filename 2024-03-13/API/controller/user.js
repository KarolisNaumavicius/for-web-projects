import { Router } from 'express';
import User from '../model/user.js';
import upload from '../middleware/multer.js';

const router = Router(); // gali buti app, taciau router del skirtumo, kad maytusi, kad esame viduje kontrolerio

router.get('/', async (req, res) => {

    // console.log(await user.find())

    res.send(await User.find());
});

router.get('/:id' , async (req, res) => {

    res.send(await User.findById(req.params.id));


});

router.post('/', upload.single('nuotrauka'), async (req, res) => {

    // naujo vartotojo sukurimas

    // req.body.photo = req.file.filename ? req.file.filename : "";
    req.body.photo = req.file?.filename;

    console.log(req.file);

    await User.create(req.body);
    // await User.create({
    //     name : "labas", 
    //     last_name: "This",
    //     email : "abathis@gmail.com",
    //     password: "reila"
    // })
    
    res.send('Irasas issaugotas')
});

router.put('/:id', async (req, res) => {

    await User.findByIdAndUpdate(req.params.id, req.body);

    res.send('irasas atnaujintas');

});

// app.put('/:id', async (req, res) => {

//     await User.findByIdAndUpdate('67064177de577148b08cb6af', {
//         name : 'Zara'
//     });

//     res.send('irasas atnaujintas');

// });

router.delete('/:id', async (req, res) => {

    await User.findByIdAndDelete(req.params.id);

    res.send('Irasas itrintas')
 });

 export default router;
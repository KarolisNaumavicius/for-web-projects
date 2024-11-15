import { Router } from 'express';
import Post from '../model/post.js';
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';

const router = Router();

// Grąžinamas visų post'ų sąrašas
router.get('/', auth, async (req, res) => {
    try {
        // const data = await Post.find();
        // const dataWithUser = [];
        // for(const value of data) {
        //     value.author = await User.findOne(value.author);
        //     dataWithUser.push(value);
        // }
        // res.json(dataWithUser);
       
        // Populate metodas užildo schemoje pažymėtą raktažodį modelio informacija
        res.json(      
            await Post
            .find()
            .populate('author', ['user_name', 'photo'])
            .populate('likes')
        );
    } catch(e) {
        console.log(e);
        res.status(500).json('Įvyko klaida');
    }
});

// Naujo įrašo sukūrimas
router.post('/', auth, upload.single('photo'), async (req, res) => {
    if(req.file)
        req.body.photo = req.file.filename;

    try {
        await Post.create(req.body);
        res.json('Įrašas sėkmingai išssaugotas');
    } catch(e) {
        // Įvykus klaidai grąžiname klaidos kodą ir žinutę
        console.log(e)
        res.status(500).json({message: 'Įvyko klaida'});
    }
});

router.delete('/:id', auth, async (req, res) => {
    console.log("Delete route reached"); // To confirm if route is reached
    try {

     await Post.deleteOne({ _id : req.params.id});

      // Your deletion logic here
      res.status(200).json({ message: "Post deleted" });
      
    } catch (err) {
      res.status(500).json({ error: "Failed to delete post" });
    }
});

router.get('/:id', auth, async (req, res) => {
    try {
        // Randa konkretų postą pagal ID
        const post = await Post.findOne({ _id: req.params.id });
        
        // Jei postas nerastas, grąžiname klaidą
        if (!post) {
            return res.status(404).json({ error: "Post not found" });
        }

        // Jei postas rastas, grąžiname jį kaip atsakymą
        res.status(200).json(post);
    } catch (err) {
        // Grąžiname klaidos atsakymą, jei įvyko klaida
        res.status(500).json({ error: "Failed to retrieve post" });
    }
});

export default router;
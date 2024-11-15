import express from 'express';
import mongoose from 'mongoose';
import user from './controller/user.js';
import upload from './middleware/multer.js';

// mkdir - make directory

// MVC:
// Model - Atsakingas už duomenų/informacijos paėmimą iš duomenų bazės
// View - Atsakingas už iš controlerio gautos informacijos atvaizdavimą
// Controller - Atsakingas už modelio informacijos apdorojimą


// kodel user, o ne router, nes export ->default<-, mes importuoti galim bet kokiu pavadinimu,
//jeigu butu tik export router, tada reiketu importuoti teisingu pavadinimu ir rasyti tarp riestiniu skliaustu
// pvz: import { router } from './controller/user.js';



// Prisijungimas prie duomneų bazės
await mongoose.connect('mongodb://localhost:27017/pirma_duombaze').then(() => {
    console.log('Prisijungimas sėkmingas');  
});

const app = express();

// controllerio registravimas

app.use(user);

app.use(express.urlencoded({
    extended: true
}));

// Failu pasiekiamumo priskyrimas nurodant: 
//Pirmu parametru - url kelia
// Antra parametru - direktorija kurioje saugomi failai
app.use('/uploads/', express.static('./uploads'));

app.use('/users/', user);

// Middleware priskyrimas, tarpininkas
// upload.single() - naudojamas vienam failui
// upload.array() - naudojamas keliems failams ikelti
// upload.fields() - naudojamas keliems failams skirtingomis name reiksmemis
// Nuroddomi laukeliu pavadinimai (name) ir pasirinkimai maksimalus kiekis
// upload.fields([{ name : 'nuotrauka', maxCount: 2 }, { name: 'failas', maxCount: 2}])
app.post('/files',  upload.fields([{ name : 'nuotrauka', maxCount: 2 }, { name: 'failas', maxCount: 2}]),
// (req, res, next) => {

//     informacijos patikrinimas
//     middleware patikrinimas, galima rasyti daug funkciju -> funkcija nuo funkcijos prie
//     next('neteisingas failo formatas');
// },




(req, res) => {

res.send('failas ikeltas')

});



// const user = mongoose.model('User', {
//     name : String,
//     last_name : String,
//     email : String,
//     password: String,


// });

app.listen(3000);
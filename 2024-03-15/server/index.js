import express from 'express';
import mongoose from 'mongoose';
import user from './controller/user.js';
import cors from 'cors';

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

app.use(express.urlencoded({
    extended: true
}));

//leidimas kreiptis i serveri is kito adreso
app.use(cors());

// Failu pasiekiamumo priskyrimas nurodant: 
//Pirmu parametru - url kelia
// Antra parametru - direktorija kurioje saugomi failai
app.use('/files/', express.static('./uploads'));

// router ikeliame
app.use('/users/', user);

app.listen(3000);
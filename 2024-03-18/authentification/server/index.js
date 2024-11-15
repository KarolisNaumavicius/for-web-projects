import express from 'express';
import session from 'express-session';
import mongoose, { Schema } from 'mongoose';


await mongoose.connect('mongodb://localhost:27017/user_experience').then(() => {
    console.log('good connection');
});

const app = express();

app.set('trust proxy', true)

app.use((session)({

    // Slaptos frazes nustatymas
    secret: 'kuo unikalesne labai slapta fraze',
    resave: false,
    saveUninitialized: true,
}));
// reikia, norint priimti uzklausu duomenis, request body
app.use(express.urlencoded({
    extended : true
}));

function checkSession(req, res, next) {
    if(req.session && req.session.loggedIn) {
        next();
    } else{
        res.status(401).json('turinys neprieinamas')
    }
}

// route handler


app.get('/', (req, res) => {
        
    // i ka norime talpinti informacija
    if(req.session.loggedIn === true) {
        
        res.json('sveikinu prisijungus') 
    } else {
        res.status(401).json('turinys prieinamas tik registruotiems vartotojams')
    }
});

app.post('/login', async (req, res) => {
    // tikrinam ar teisingi prisijungimo duomenys

    const { email, password } = req.body;

    console.log(req.body);


    try {

    const user = await User.findOne({ email });

    if(user && user.password === password) {
        req.session.loggedIn = true;

         res.json('sveikinu prisijungus, gaunate sausaini')
    } else {
        res.status(401).json('neteisingi prisijungimo duomenys');
    } } 
        catch(error){
        res.status(500).json('klaida', error)
    }
});

const User = mongoose.model('User', {
    email : String,
    password : String
});

app.post('/register', (req, res) => {

    const { email, password } = req.body;

    const newUser = new User({ email, password });

    newUser.save();

    res.json('saved user');

});


app.listen(3000);
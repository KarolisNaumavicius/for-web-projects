const auth = (req, res, next) => {
    if (req.session.user) {
        next(); // Jei vartotojas prisijungęs, leidžiame vykdyti kitą vidurinę įrangą arba maršrutą
    } else {
        res.status(401).json('Neįgaliotas prieigos bandymas');
    }
};

export default auth;
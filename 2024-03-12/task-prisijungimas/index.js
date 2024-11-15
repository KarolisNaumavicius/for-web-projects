import express from 'express';

const app = express();

app.use(express.urlencoded({
  extended : true
}));


app.post('/register', (req, res) => {

  const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

  if (req.body && req.body.name && req.body.last_name && req.body.email && req.body.password){

  if(
  req.body.name.length > 3 &&  req.body.name.length < 200 &&
  req.body.last_name.length > 3 && req.body.last_name.length < 200 &&
  req.body.email.length > 5 && req.body.email.length < 50 &&
  emailRegex.test(req.body.email) &&
  req.body.password.length > 5 && req.body.password.length < 50) {

    console.log('Sveikiname sekmingai prisiregistravus');
    res.send('Sveikiname sekmingai prisiregistravus')

  } else {
    console.log('registracija nesekminga');
    res.send('registracija nesekminga')
  }
} else {
  console.log('Laukai nėra užpildyti');
  res.send('Laukai nėra užpildyti')
}

});


console.log('veikia');

app.listen(4001, () => {
console.log('veikia serveris')
});
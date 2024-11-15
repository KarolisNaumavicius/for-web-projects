console.log(`veikia`)

console.log(`-----Loginiai operatoriai----`)

function rand(min, max) {

    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min +1) + min);
    
    }


/* praeisim loginius operatorius*/

/* Js comparisons pasiziureti*/

/*let pirmasSkaicius = 10
let antrasSkaicius = 15*/
// issaukiant funkcija gali buti perduodami argumentai (arguments)
let pirmasSkaicius = rand(0, 40);
let antrasSkaicius = rand(0, 40);

console.log(pirmasSkaicius, antrasSkaicius);

if(pirmasSkaicius == antrasSkaicius) {

    console.log(`Skaiciai yra lygus netikrinant duomens tipo`);
}

if(pirmasSkaicius === antrasSkaicius) {

    console.log(`Skaiciai yra lygus tikrinant duomens tipo`);
}

if(pirmasSkaicius != antrasSkaicius) {

    console.log(`Pirmas Skaicius yra nelygus antram netikrinant duomens tipo`);
}


if(pirmasSkaicius !== antrasSkaicius) {

    console.log(`Pirmas Skaicius yra nelygus antram ikrinant duomens tipa`);
}

if(pirmasSkaicius < antrasSkaicius) {

    console.log(`Pirmas Skaicius yra mazensnis uz antraji`);
}

if(pirmasSkaicius <= antrasSkaicius) {

    console.log(`Pirmas Skaicius yra mazensnis arba lygus uz antraji`);
}

if(pirmasSkaicius > antrasSkaicius) {

    console.log(`Pirmas Skaicius yra didesnis antrajam`);
}

if(pirmasSkaicius >= antrasSkaicius) {

    console.log(`Pirmas Skaicius yra didesnis arba lygus antrajam`);
}

// Stringu palyginimai

console.log(`-------------------Stringu palyginimai ------------------------`);

let pirmojiRaide = `A`;
let antrojiRaide = `B`;

if(antrojiRaide > pirmojiRaide) 
{
    console.log(` B yra auksciau nei A`) //tekstus lyginant gera
 }

 console.log(`----------------Kondiciju sujungimas------------`);
//patikrinkite ar pirmas skaiciius yra diddesnis nei 25 ir mazeisnis nei 40(tik tada salyga veikia, kitais ne)
 if(pirmasSkaicius > 25) {
    if(pirmasSkaicius < 40) {
    console.log(`pirmas skaicius yra didesnis nei 25 ir mazesnis nei 40`,`gauta reiksme: ${pirmasSkaicius}`);
 }
}



//sutrumpinam
//2 operatoriai salygos sujungimai

//naudosim su && and simbolius sujungti dvi kondicijas (&& - and (ir)) Rezultatui gauti visos kondicijos turi vbuti tteisingos (true)
// pirmasskaicius = 26 if (true && true) - turim tureti abu true variantus
if(pirmasSkaicius > 25 && pirmasSkaicius < 40) {
    console.log(`pirmas skaicius yra didesnis nei 25 ir mazensi negu 40`)
} 

//patikrinite ar pirmas skaicius yra didensis nei 10, mazeniss nei 35, nely7gus 18 ir 16

if(pirmasSkaicius > 10 && pirmasSkaicius < 35 && pirmasSkaicius !== 16 && pirmasSkaicius !==18) {
    console.log(`Visos keturios salygos yra teisingos`)
}


//kitas operatorius - || - Or (arba) operatorius kuriuo tikriname ar bent viena kondicija issipildo yra teisinga
//patikrinkite ar pirmasSkaicius didesnis nei 25 arba antrasSkaicius yra mezesnis nei 10 
// if(true || false) - musus salyga pildosi
console.log(` -----OR operatoriuuys----`)
if(pirmasSkaicius > 25 || antrasSkaicius < 10) {
console.log(`pirmas skaicius yra didesnis nei 25 arba antras skaicius yra mazesnis nei 10`)
}


console.log(`--------------Apimtis(scopes)-------------------`)

//dabar nebus pravartus, bet ateityje geras
//greito patikrinimo, prie kint pagal salyga reikia reiksme prisikirit 

//Global scope (Globali apimtis)
let rezultatas =``;

if(pirmasSkaicius > 10) {
    //block scope (bloko apimtis)
let rezultatas = `Kondiciju pabaiga`;

}



//dar kruva kodo
//...
//...
//...

//norime atcaiziudoti kintamaji
console.log(rezultatas);



console.log(`--------------TERNARY OPERATORIUS-------------------`);

let ternaryOperatorius = pirmasSkaicius > 10 ? `pirmas ksaicius didensis nei 10. priskirta reiksme` : null;

console.log(ternaryOperatorius);


console.log (`---vienos eilutes veiksmo kondicija---`)

if(antrasSkaicius > 25)
 console.log (`--------------Vienos eilutes veiksmo kondicija`);



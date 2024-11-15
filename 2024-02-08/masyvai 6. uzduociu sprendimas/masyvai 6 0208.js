console.log(`is it working?`);


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// 1.	Sugeneruokite masyvą iš 10 elementų, kurio elementai būtų masyvai iš 5 elementų su reikšmėmis nuo 5 iki 25.



const array = [];

for (let pirmas = 0; pirmas < 10; pirmas++) {
    array[pirmas] = []; // nurodom, kad kreipiames
    for (let antras = 0; antras < 10; antras++) {
        array[pirmas][antras] = rand(5, 25);

    }
}

console.log(array)

// let masyvas = []

// for(i = 0; i < 30; i++) {
//     masyvas[i]=rand(5, 25);
// }

// let count = 0;

// masyvas.forEach(function(elementas){
//     if(elementas > 10) {
//         count++;
//     }
// })
// console.log(count)
// console.log(masyvas)




// 2.	Naudodamiesi 1 uždavinio masyvu:
// a)	Suskaičiuokite kiek masyve yra elementų didesnių už 10;

let kiekis = 0;

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    let kiekis = 0;
    for (let x = 0; x < array[i].length; x++) {
        if (array[i][x] > 10) {
            kiekis++;
        }
        console.log(array[i][x]);
    }
    console.log(kiekis);
}
console.log(array);


didesni = ar1.reduce(
    (didesniP, ar) =>
      didesniP +
      ar.reduce((didesniA, val) => (val > 10 ? didesniA + 1 : didesniA), 0),
    0
  )

  console.log(didesni);
// b)	Raskite didžiausio elemento reikšmę;

let didziausias = 0;

for (let i = 0; i < array.length; i++) {
    for (let x = 0; x < array[i].length; x++) {
        if (array[i][x] > didziausias) {
            didziausias = array[i][x];
        }
    }
}

console.log(didziausias);
document.writeln(didziausias);

// let maxNum = Math.max(...ar1.flat())
// console.log(maxNum)


// c)	Suskaičiuokite kiekvieno antro lygio masyvų su vienodais indeksais sumas (t.y. suma reikšmių turinčių indeksą 0, 1 ir t.t.)

const sumos = [];

for (let i = 0; i < array[i].length; i++) {
    let suma = 0;
  
    for (let x = 0; x < array.length; x++) {
        suma += array[x][i];
    }
  
    sumos.push(suma);
}

console.log(sumos);
document.write(sumos);


// su funkcija
// const columnSum = (array) => {
//     const sumArray = [];
//     for (let i = 0; i < array[i].length; i++) {
//         let sum = 0;
//         for (let j = 0; j < array.length; j++) {
//             sum += array[j][i];
//         }
//         sumArray.push(sum);
//     }
//     return sumArray;
// }

// d)	Visus antro lygio masyvus “pailginkite” iki 7 elementų

for (let i = 0; i < array.length; i++) {
    const masyvoIlgis = array[i].length;
    const trukstamiElementai = 7 - masyvoIlgis;
  
    for (let x = 0; x < trukstamiElementai; x++) {
        array[i].push(rand(5, 25));
    }
}

console.log(array);
console.log(array);

// e)	Suskaičiuokite kiekvieno iš antro lygio masyvų elementų sumą atskirai ir sumas panaudokite kaip reikšmes sukuriant naują masyvą. T.y. pirma naujo masyvo reikšmė turi būti lygi mažesnio masyvo, turinčio indeksą 0 dideliame masyve, visų elementų sumai

const sumose = [];

for (let i = 0; i < array.length; i++) {
    let suma = 0;

    for (let x = 0; x < array[i].length; x++) {
        suma += array[i][x];
    }

    sumose.push(suma);
}

console.log(sumose);



// 3.	Sukurkite masyvą iš 10 elementų. Kiekvienas masyvo elementas turi būti masyvas su atsitiktiniu kiekiu nuo 2 iki 20 elementų. Elementų reikšmės atsitiktinai parinktos raidės iš intervalo A-Z. Išrūšiuokite antro lygio masyvus pagal abėcėlę (t.y. tuos kur su raidėm).


const raidziuMasyvas = [];

for(let y = 0; y < 10; y++) {
    raidziuMasyvas[y]=[]
    
    for(let x = 0; x < rand(2, 20); x++){
        raidziuMasyvas[y][x] = letters[rand(0, letters.length - 1)];
    }
}

console.log(...raidziuMasyvas);


const tempArray = [15, 4, 8, 400, 1500];

tempArray.sort(function(pirma, antra) {
    return 100; // Teigiama reiksme
    return 0; // Paliekam ten kur yra
    return -100; // Neigiama reiksme

});

// 4.	Išrūšiuokite trečio uždavinio pirmo lygio masyvą taip, kad elementai kurių masyvai trumpiausi eitų pradžioje.
// Masyvai kurie turi bent vieną “K” raidę, visada būtų didžiojo masyvo visai pradžioje.

raidziuMasyvas1.sort(function(a, b){
    if(a.length > b.length)
    return 100;

        if(a.length < b.length){
            return -100;
}

// Abu lygus
return 0;
})





console.log(raidziuMasyvas);


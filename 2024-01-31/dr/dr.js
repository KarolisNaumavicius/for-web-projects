function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (x = 0; x < 10; x++) {
    document.write(`Pirma pamoka <br/>`);
}

y = 1;

while (y < 10) {
    document.write(`Antra pamoka<br/>`);
    y++;

}


let pirmas = 10;
let antras = 15;

// if(salyga)

// != apvercia atvirksciai



if (pirmas != antras) {
    document.write(`Payvko<br/>`);
}

let pirma = 15;
let antra = 20;

if (pirma < antra) {
    document.write(`Pavyko<br/>`); // true
}
else {
    document.write(`Nepavyko<br/>`); // fasle
}

let pirmGer = `kava`;
let antGer = `cola`;
let trecGer = `alus`;

if (pirmGer == `kava`) {
    if (antGer == `alus`) {
        document.write(`Taip, teisingai`);
    } else {
        document.write(`Neteisingai!`);
    }
}

if ((pirmGer == `kava`) && (antGer == `cola`)) {
    document.write(`<br/>Yes!`)
}

// uzd sprendimai

// for(;;) galima taip paleisti begalini cikla 

let skaiciuotuvas = 0;

// for (let i =0; i < 1000; i++)  {
//   console.log(`Veikia`);
//   break;
// }

document.write(`<h2>Monetos a)</h2>`)

while (true) {
    let moneta = rand(0, 1);

    if (moneta === 0) {
        // herbas
        document.write(`H`);
        break;
    } else {
        //skaicius
        document.write(`S`);
    }
}

while (true) {  // while(kiekHerbu >= 3) - galima ir taip, is kart 
    // break
    let moneta = rand(0, 1);
    // 2.
    let KiekHerbu = 0;
    kiekHerbu++; // 1


    if (moneta === 0) {
        // herbas
        document.write(`H`);
        kiekHerbu++;
        break;
    } else {
        //skaicius
        document.write(`S`);
    }

    if (kiekHerbu >= 3)
        break;
}

while (true) {  // while(kiekHerbu >= 3) - galima ir taip, is kart 
    // break
    let moneta = rand(0, 1);
    // 2.
    let kiekHerbu = 0;
    kiekHerbu++; // 1

    kiekHerbu = 0;

    if (moneta === 0) {
        // herbas
        document.write(`H`);
        kiekHerbu++;
        break;
    } else {
        //skaicius
        document.write(`S`);
        kiekHerbu = 0;
    }
}

// kiekKartu - KiekHerbu
// if(kiekHerbu >= 3)
//     break;

document.write(`<h2>Saskiu zaidimas</h2>`);
// o kam ciklo reikjo? Ar galima be ciklo?

let petroRezultatas = 0;
let kazioRezultatas = 0;

while (true) { // partija

    let petras = rand(10, 20);
    let kazys = rand(5, 25);

    petroRezultatas += petras;
    kazioRezultatas += kazys;

    // be ciklo pagalbos, viena partija pasiziuresim

    console.log(`<p>Partijos taskai: ${kazys} ${petras}</p>`);

    if (petras > kazys) {
        document.write(`<p>Partija laimejo petras</p>`);

    }
    else if (petras === kazys) {
        document.write(`<p>Ivyko lygiosios</p>`)
    }
    else {
        document.write(`<p>Partija laimejo kazys</p>`);
    }

    if (petroRezultatas >= 222 || kazioRezultatas >= 222)
        break;
}

// bendras rezultatas
document.write(`<p>Petro taskai: ${petroRezultatas} Kazio taskai ${kazioRezultatas}</p>`);

if (petroRezultatas > kazioRezultatas) {
    document.write(`<p>Partija laimejo petras</p>`);

}
else if (petroRezultatas === kazioRezultatas) {
    document.write(`<p>Ivyko lygiosios</p>`)
}
else {
    document.write(`<p>Partija laimejo kazys</p>`);
}


// 8.	Sumodeliuokite vinies kalimą. Įkalimo gylį sumodeliuokite pasinaudodami rand() funkcija. Vinies ilgis 8.5cm (pilnai sulenda į lentą).
// a)	“Įkalkite” 5 vinis mažais smūgiais. Vienas smūgis vinį įkala 5-20 mm. Suskaičiuokite kiek reikia smūgių.
// b)	“Įkalkite” 5 vinis dideliais smūgiais. Vienas smūgis vinį įkala 20-30 mm, bet yra 50% tikimybė (pasinaudokite rand() funkcija tikimybei sumodeliuoti), kad smūgis nepataikys į vinį. Suskaičiuokite kiek reikia smūgių.

document.write(`<h2>Astunta uzduotis - Viniu kalimas a)</h2>`);

let vinis = 85;
let bendrasGylis = 0;
let smugiai = 0;

// for nes zinom kad reikia ikalti 5 vinis
for (let i = 0; i < 5; i++) {
    let bendrasGylis = 0;
}
// 1. Iteracija bendrasGylis = 0
// 2. Iteracija bendrasGylis >= 85
// while(86 <= 85) - nebesisuka ciklas
while (bendrasGylis <= vinis) {
    let ikalimoGylis = rand(5, 20);

    console.log(ikalimoGylis);

    bendrasGylis += ikalimoGylis;

    smugiai++;

}

document.write(`Viniai ikalti prireike: ${smugiai} smugiu`);


// Kitas variantas be while, jeigu 85 * 5, tada nereikia for

// let vinis = 85 * 5;
// let bendrasGylis = 0;
// let smugiai = 0;

//while (bendrasGylis <= vinis) {
//    let ikalimoGylis = rand(5, 20);
//
//   console.log(ikalimoGylis);

//    bendrasGylis += ikalimoGylis;

//   smugiai++;

//}


document.write(`<h2>Astunta uzduotis - Viniu kalimas b)</h2>`);

vinis = 85;
bendrasGylis = 0;
smugiai = 0;

while (bendrasGylis <= vinis) {
    smugiai++;

    // 0 = Nepataikymas i vini
    if (rand(0, 1) === 0) {
        console.log(`Nepataikem i vini`);
        continue; // Perejimas i sekancia iteracija
    } else {

        let ikalimoGylis = rand(20, 30);
     
        bendrasGylis += ikalimoGylis;

    }
}


// dar duos su ciklais papildomu uzduoteliu 


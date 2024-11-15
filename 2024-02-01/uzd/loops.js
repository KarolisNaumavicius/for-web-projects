
// document.write(`<h2>Dirba</h2>`)


console.log(`Veikia`);


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}
var x, y, chr;

for (x = 1; x <= 6; x++) {
    for (y = 1; y < x; y++) {
        chr = chr + ("*");
    }
    console.log(chr);
    chr = '';
}

// 2.	Sugeneruokite 300 
// atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir
//  suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 
//  275 turi būti raudonos spalvos.


console.log('kitas')

let kiekis = 0;

for (let skaiciai = 0; skaiciai < 300; skaiciai++) {
    let atsitiktinisSkaicius = rand(0, 300);
    console.log(skaiciai, atsitiktinisSkaicius)
    if (atsitiktinisSkaicius > 150) {
        kiekis++;
        console.log(kiekis, "- kiekis atsitiktiniiu skaiciu")
    }
    if (atsitiktinisSkaicius > 275) {
        document.write(`<p style="color: red;">${atsitiktinisSkaicius}</p>`);
    }

}

// 2. Vienoje eiluteje atpausdinkite visus skaicius
// nuo 1 iki 3000, kurie dalijasi is 77 be liekanos.
// Skaicius atskirkite kableliais. Po paskutinio skaiciaus 
// kablelio neturi buti. Jeigu reikia, css stiliu,
// kad visi rezultatai matytusi ekrane

let eilute = "";
let skaicius = 0;

// for(let i = 0; i < 3000; i++) {
//     skaicius++;

//     if(skaicius % 77 === 0) {
//         eilute += skaicius + ',';
//     }

// }

// eilute = eilute.slice(0, -1);

console.log(eilute)

for (let i = 0; i < 3000; i++) {
    skaicius++;
    if (skaicius % 77 === 0) {
        if (eilute !== "") {
            eilute += ',';
        }
        eilute += skaicius
    }
}

console.log(eilute);

// 3. Nupieskite kvadrata is "*", kurio krastines sudaro 100 "*". 
// Panaudokite css stiliu,
// kad kvadratas ekrane atrodytu kvadratinis.
// (Priskirkite reikiama eiluciu auksti)

//narsykleje
zvaigzdutes = "";

for (let k = 0; k < 100; k++) {
    zvaigzdutes += "*";
}
console.log(zvaigzdutes)

for (let i = 0; i < 100; i++) {
    document.write(zvaigzdutes, "<br>")
}

let eiluteZvaigzduciu = '';

//konsoleje
for (let k = 0; k < 100; k++) {
    zvaigzdutes += "*";
    if (k === 99) {
        for (let l = 0; l < 100; l++) {
            eiluteZvaigzduciu += zvaigzdutes + "\n";
        }
    }
}
console.log(eiluteZvaigzduciu)

// 5. Pries tai nupiestam kvadratui nupieskite raudonas istrizaines

for (let i = 0; i < 100; i++) {
    let eilute = ''; // reikes simto eiluciu
    for (let j = 0; j < 100; j++) {
        if (i === j || i === 100 - j - 1) {
            // pridedam raudona zvaigzde
            eilute += '<span style="color: red;">*</span>';
        } else {
            // pridedam juoda zvaigzde
            eilute += "*";
        }
    }
    document.write(eilute + `<br>`);
}

//6. Metam moneta. Monetos kritimo rezultata imituojam rand() funkcija,
// kur 0 yra herbas, o 1 - skaicius. Monetos metimo rezultatus isvedame i ekrana
// atskiroje eiluteje: "S" jeigu iskrito skaicius ir "H" jeigu herbas.
// Suprogramuokite keturis skirtingus scenarijus kai monetos metima stabdome:
//  a) Iskritus herbui;
//  b) Tris kartus iskritus herbui;
//  c) Tris kartus is eiles iskritus herbui;

let skaiciuotiH = 0;
let skaiciuotiS = 0;
let rezultatai = '';

// imu 20 metimu
console.log("Metant monetas, herbas = 0, o Skaicius = 1")
for (let i = 0; i < 30; i++) {
    let metuMoneta = rand(0, 1);
    rezultatai += metuMoneta;

    // let H = 0;
    // let S = 1;
    console.log('kokia moneta:', metuMoneta)
    if (metuMoneta == 0) {
        skaiciuotiH++;
        // console.log('Herbu iskrito:', skaiciuotiH)


    } else {
        skaiciuotiS++;
        // console.log('Skaiciu iskrito:', skaiciuotiS)
    }

    console.log('Herbu iskrito:', skaiciuotiH);
    console.log('Skaiciu iskrito:', skaiciuotiS);
    console.log('Rezultatas:', rezultatai)

    // a salyga
    if (skaiciuotiH == 1) {
        break;
    }

    // b salyga
    if (skaiciuotiS == 3) {
        break;
    }

    // c salyga
    if (rezultatai.slice(-3) === '000') {
        break;
    }

}

// 7. Kazys ir Petras zaidzia saskem.
// Petras surenka tasku kieki nuo 10 iki 20,
// Kazys surenka tasku kieki nuo 5 iki 25. Vienoje eiluteje isvesti 
// zaideju vardus su tasku kiekiu ir "Partija laimejo: laimetojo vardas".
// Tasku kieki generuokite funkcija rand(). 
// Zaidima laimi tas, kas greiciau surenka 222 taskus
// Partijas kartoti tol kol kazkuris zaidejas pirmas surenka 222 arba daugiau tasku


let petroTaskai = 0;
let kazioTaskai = 0;

while (true) {
    let petras = rand(10, 20);
    let kazys = rand(5, 25);
    petroTaskai += petras;
    kazioTaskai += kazys;
    console.log("Petro taskAS:", petras);
    console.log("Kazio taskAS:", kazys);

    console.log("Petro taskai:", petroTaskai);
    console.log("Kazio taskai:", kazioTaskai);

    if (kazioTaskai >= 222 || petroTaskai >= 222) {

        if (kazioTaskai >= 222) {
            console.log("Partija laimejo: Kazys")
            break;
        }
        if (petroTaskai >= 222) {
            console.log("Partija laimejo: Petras")
            break;
        }
    }

    console.log("Kitas partija")

}

// 8. Sumodeliuokite vinies kalima. Ikalinimo gyli sumodeliuokite pasinaudodami rand()
//funkcija. Vinies ilgis 8.5 cm (pilnai sulenda i lenta).
// a) Ikalinkite 5 vinis mazais smugiais. Vienas smugis vini ikala 5-20 mm.
// Suskaiciuokite kiek reikia smugiu
// b) ikalkite 5 vinis dideliais smugiais. Vienas smugis vini ikala 20-30 mm, 
// bet yra tikimybe(pasinaudoti rand() funkcija tikimybei sumodeliuoti), kad smugis nepataikys i vini.
// Suskaiciuokite kiek reikia smugiu.
// b) 2) kad tikimybe nepataikyti yra 50%

let viniesSulindimoGylis = 85; // mm
let ikaltasIlgis = 0;
let viniuIkaltuSkaicius = 0;
let smugiuSkaicius = 0;


// a)

while (true) {
    let smugisMazas = rand(5, 20);
    ikaltasIlgis += smugisMazas;
    smugiuSkaicius++;
    console.log('1-tos vinies smugiu skaicius: ', smugiuSkaicius, `ilgis: ${ikaltasIlgis} mm`)

    if (ikaltasIlgis >= 85) {
        let likutis = viniesSulindimoGylis - ikaltasIlgis;
        let viniesSulindimoGylisGalutinis = ikaltasIlgis + likutis;
        console.log('*1-tos vinies bendras smugiu skaicius:' + smugiuSkaicius + ", Vinies ikalimo gylis" + viniesSulindimoGylisGalutinis + " " + "mm");
        break;
    }


}

let nulis = 0;
let rezulatatasVn = nulis + smugiuSkaicius;
smugiuSkaicius = 0;
ikaltasIlgis = 0;


while (true) {
    let smugisMazas = rand(5, 20);
    ikaltasIlgis += smugisMazas;
    smugiuSkaicius++;
    console.log('2-tos vinies smugiu skaicius: ', smugiuSkaicius, `ilgis: ${ikaltasIlgis} mm`)

    if (ikaltasIlgis >= 85) {
        let likutis = viniesSulindimoGylis - ikaltasIlgis;
        let viniesSulindimoGylisGalutinis = ikaltasIlgis + likutis;
        smugiuSkaicius++
        console.log('*2-tos vinies bendras smugiu skaicius:' + smugiuSkaicius + ", Vinies ikalimo gylis" + viniesSulindimoGylisGalutinis + " " + "mm");
        break;
    }

}

let rezulatatasDu = rezulatatasVn + smugiuSkaicius;
smugiuSkaicius = 0;
ikaltasIlgis = 0;


while (true) {
    let smugisMazas = rand(5, 20);
    ikaltasIlgis += smugisMazas;
    smugiuSkaicius++;
    console.log('3-tos vinies smugiu skaicius: ', smugiuSkaicius, `ilgis: ${ikaltasIlgis} mm`)


    if (ikaltasIlgis >= 85) {
        smugiuSkaicius++;
        let likutis = viniesSulindimoGylis - ikaltasIlgis;
        let viniesSulindimoGylisGalutinis = ikaltasIlgis + likutis;
        console.log('*3-tos vinies bendras smugiu skaicius:' + smugiuSkaicius + ", Vinies ikalimo gylis" + viniesSulindimoGylisGalutinis + " " + "mm");
        break;
    }
}

let rezulatatasTr = rezulatatasDu + smugiuSkaicius;
smugiuSkaicius = 0;
ikaltasIlgis = 0;

while (true) {
    let smugisMazas = rand(5, 20);
    ikaltasIlgis += smugisMazas;
    smugiuSkaicius++;
    console.log('4-tos vinies smugiu skaicius: ', smugiuSkaicius, `ilgis: ${ikaltasIlgis} mm`)


    if (ikaltasIlgis >= 85) {
        smugiuSkaicius++;
        let likutis = viniesSulindimoGylis - ikaltasIlgis;
        let viniesSulindimoGylisGalutinis = ikaltasIlgis + likutis;
        console.log('*4-tos vinies bendras smugiu skaicius:' + smugiuSkaicius + ", Vinies ikalimo gylis" + viniesSulindimoGylisGalutinis + " " + "mm");
        break;
    }
}

let rezulatatasKt = rezulatatasTr + smugiuSkaicius;

while (true) {
    let smugisMazas = rand(5, 20);
    ikaltasIlgis += smugisMazas;
    smugiuSkaicius++;
    console.log('5-tos vinies smugiu skaicius: ', smugiuSkaicius, `ilgis: ${ikaltasIlgis} mm`)


    if (ikaltasIlgis >= 85) {
        smugiuSkaicius++;
        let likutis = viniesSulindimoGylis - ikaltasIlgis;
        let viniesSulindimoGylisGalutinis = ikaltasIlgis + likutis;
        console.log('*5-tos vinies bendras smugiu skaicius:' + smugiuSkaicius + ", Vinies ikalimo gylis" + viniesSulindimoGylisGalutinis + " " + "mm");
        break;
    }
}

let rezulatatasPn = rezulatatasKt + smugiuSkaicius;

console.log("Bendras smugiu skaicius =", rezulatatasPn);


// b --
console.log("Dideles vinies kalimai")

let nepataikytiSmugiai = 0;
rezulatatasVn = 0;
rezulatatasDu = 0;
rezulatatasTr = 0;
rezulatatasKt = 0;
rezulatatasPn = 0;



while (true) {
    let smugisDidelis = rand(0, 30);
    ikaltasIlgis += smugisDidelis;
    smugiuSkaicius++;
    console.log('1-tos vinies smugiu skaicius: ', smugiuSkaicius, `ilgis: ${ikaltasIlgis} mm`)

    if (smugisDidelis == 0) {
        nepataikytiSmugiai++;
    }

    if (ikaltasIlgis >= 85) {
        let likutis = viniesSulindimoGylis - ikaltasIlgis;
        let viniesSulindimoGylisGalutinis = ikaltasIlgis + likutis;
        console.log('*1-tos vinies bendras smugiu skaicius:' + smugiuSkaicius + ",Vinies ikalimo gylis" + viniesSulindimoGylisGalutinis + " " + "mm" + ", Nepataikyta smugiu:" + nepataikytiSmugiai);
        break;
    }

}

nepataikymaiVn = nepataikytiSmugiai + 0;
nulis = 0;
rezulatatasVn = nulis + smugiuSkaicius;
smugiuSkaicius = 0;
ikaltasIlgis = 0;
nepataikytiSmugiai = 0;


while (true) {
    let smugisDidelis = rand(0, 30);
    ikaltasIlgis += smugisDidelis;
    smugiuSkaicius++;
    console.log('2-tos vinies smugiu skaicius: ', smugiuSkaicius, `ilgis: ${ikaltasIlgis} mm`)

    if (smugisDidelis == 0) {
        nepataikytiSmugiai++;
    }

    if (ikaltasIlgis >= 85) {
        let likutis = viniesSulindimoGylis - ikaltasIlgis;
        let viniesSulindimoGylisGalutinis = ikaltasIlgis + likutis;
        smugiuSkaicius++
        console.log('*2-tos vinies bendras smugiu skaicius:' + smugiuSkaicius + ",Vinies ikalimo gylis" + viniesSulindimoGylisGalutinis + " " + "mm" + ", Nepataikyta smugiu:" + nepataikytiSmugiai);
        break;
    }

}

nepataikymaiAn = nepataikymaiVn + nepataikytiSmugiai;
rezulatatasDu = rezulatatasVn + smugiuSkaicius;
smugiuSkaicius = 0;
ikaltasIlgis = 0;
nepataikytiSmugiai = 0;


while (true) {
    let smugisDidelis = rand(0, 30);
    ikaltasIlgis += smugisDidelis;
    smugiuSkaicius++;
    console.log('3-tos vinies smugiu skaicius: ', smugiuSkaicius, `ilgis: ${ikaltasIlgis} mm`)

    if (smugisDidelis == 0) {
        nepataikytiSmugiai++;
    }

    if (ikaltasIlgis >= 85) {
        smugiuSkaicius++;
        let likutis = viniesSulindimoGylis - ikaltasIlgis;
        let viniesSulindimoGylisGalutinis = ikaltasIlgis + likutis;
        console.log('*3-tos vinies bendras smugiu skaicius:' + smugiuSkaicius + ", Vinies ikalimo gylis" + viniesSulindimoGylisGalutinis + " " + "mm" + ", Nepataikyta smugiu:" + nepataikytiSmugiai);
        break;
    }
}

nepataikymaiTr = nepataikymaiAn + nepataikytiSmugiai;
rezulatatasTr = rezulatatasDu + smugiuSkaicius;
smugiuSkaicius = 0;
ikaltasIlgis = 0;
nepataikytiSmugiai = 0;

while (true) {
    let smugisDidelis = rand(0, 30);
    ikaltasIlgis += smugisDidelis;
    smugiuSkaicius++;
    console.log('4-tos vinies smugiu skaicius: ', smugiuSkaicius, `ilgis: ${ikaltasIlgis} mm`)

    if (smugisDidelis == 0) {
        nepataikytiSmugiai++;
    }

    if (smugisDidelis == 0) {
        nepataikytiSmugiai++;
    }

    if (ikaltasIlgis >= 85) {
        smugiuSkaicius++;
        let likutis = viniesSulindimoGylis - ikaltasIlgis;
        let viniesSulindimoGylisGalutinis = ikaltasIlgis + likutis;
        console.log('*4-tos vinies bendras smugiu skaicius:' + smugiuSkaicius + ",Vinies ikalimo gylis" + viniesSulindimoGylisGalutinis + " " + "mm" + ", Nepataikyta smugiu:" + nepataikytiSmugiai);
        break;
    }
}
nepataikymaiKt = nepataikymaiTr + nepataikytiSmugiai;
rezulatatasKt = rezulatatasTr + smugiuSkaicius;
smugiuSkaicius = 0;
ikaltasIlgis = 0;
nepataikytiSmugiai = 0;

while (true) {
    let smugisDidelis = rand(0, 30);
    ikaltasIlgis += smugisDidelis;
    smugiuSkaicius++;
    console.log('5-tos vinies smugiu skaicius: ', smugiuSkaicius, ` bendras ilgis: ${ikaltasIlgis} mm`)

    if (smugisDidelis == 0) {
        nepataikytiSmugiai++;
    }

    if (ikaltasIlgis >= 85) {
        smugiuSkaicius++;
        let likutis = viniesSulindimoGylis - ikaltasIlgis;
        let viniesSulindimoGylisGalutinis = ikaltasIlgis + likutis;
        console.log('*5-tos vinies bendras smugiu skaicius:' + smugiuSkaicius + ", Vinies ikalimo gylis" + viniesSulindimoGylisGalutinis + " " + "mm" + ", Nepataikyta smugiu:" + nepataikytiSmugiai);
        break;
    }
}

nepataikymaiPn = nepataikymaiKt + nepataikytiSmugiai;
rezulatatasPn = rezulatatasKt + smugiuSkaicius;

console.log(`Bendras smugiu skaicius ${rezulatatasPn} ir bendras nepataikytu smugiu skaicius ${nepataikymaiPn}`);


// b) 2)
console.log("50%")


nepataikytiSmugiai = 0;
rezulatatasVn = 0;
rezulatatasDu = 0;
rezulatatasTr = 0;
rezulatatasKt = 0;
rezulatatasPn = 0;



while (true) {

    let smugisPirmas = rand(0, 1);

    if (smugisPirmas == 1) {
        let smugisDidelis = rand(1, 30);
        ikaltasIlgis += smugisDidelis;
        smugiuSkaicius++;
        console.log('1-tos vinies smugiu skaicius: ', smugiuSkaicius, `ilgis: ${ikaltasIlgis} mm`)

    }

    if (smugisPirmas == 0) {
        nepataikytiSmugiai++;
    }

    if (ikaltasIlgis >= 85) {
        let likutis = viniesSulindimoGylis - ikaltasIlgis;
        let viniesSulindimoGylisGalutinis = ikaltasIlgis + likutis;
        console.log('*1-tos vinies bendras smugiu skaicius:' + smugiuSkaicius + ",Vinies ikalimo gylis" + viniesSulindimoGylisGalutinis + " " + "mm" + ", Nepataikyta smugiu:" + nepataikytiSmugiai);
        break;
    }

}

nepataikymaiVn = nepataikytiSmugiai + 0;
nulis = 0;
rezulatatasVn = nulis + smugiuSkaicius;
smugiuSkaicius = 0;
ikaltasIlgis = 0;
nepataikytiSmugiai = 0;


while (true) {

    let smugisPirmas = rand(0, 1);

    if (smugisPirmas == 1) {

        let smugisDidelis = rand(0, 30);
        ikaltasIlgis += smugisDidelis;
        smugiuSkaicius++;
        console.log('2-tos vinies smugiu skaicius: ', smugiuSkaicius, `ilgis: ${ikaltasIlgis} mm`)
    }

    if (smugisPirmas == 0) {
        nepataikytiSmugiai++;
    }

    if (ikaltasIlgis >= 85) {
        let likutis = viniesSulindimoGylis - ikaltasIlgis;
        let viniesSulindimoGylisGalutinis = ikaltasIlgis + likutis;
        smugiuSkaicius++
        console.log('*2-tos vinies bendras smugiu skaicius:' + smugiuSkaicius + ",Vinies ikalimo gylis" + viniesSulindimoGylisGalutinis + " " + "mm" + ", Nepataikyta smugiu:" + nepataikytiSmugiai);
        break;
    }

}

nepataikymaiAn = nepataikymaiVn + nepataikytiSmugiai;
rezulatatasDu = rezulatatasVn + smugiuSkaicius;
smugiuSkaicius = 0;
ikaltasIlgis = 0;
nepataikytiSmugiai = 0;


while (true) {

    let smugisPirmas = rand(0, 1);

    if (smugisPirmas == 1) {
        let smugisDidelis = rand(0, 30);
        ikaltasIlgis += smugisDidelis;
        smugiuSkaicius++;
        console.log('3-tos vinies smugiu skaicius: ', smugiuSkaicius, `ilgis: ${ikaltasIlgis} mm`)
    }

    if (smugisPirmas == 0) {
        nepataikytiSmugiai++;
    }

    if (ikaltasIlgis >= 85) {
        smugiuSkaicius++;
        let likutis = viniesSulindimoGylis - ikaltasIlgis;
        let viniesSulindimoGylisGalutinis = ikaltasIlgis + likutis;
        console.log('*3-tos vinies bendras smugiu skaicius:' + smugiuSkaicius + ", Vinies ikalimo gylis" + viniesSulindimoGylisGalutinis + " " + "mm" + ", Nepataikyta smugiu:" + nepataikytiSmugiai);
        break;
    }
}

nepataikymaiTr = nepataikymaiAn + nepataikytiSmugiai;
rezulatatasTr = rezulatatasDu + smugiuSkaicius;
smugiuSkaicius = 0;
ikaltasIlgis = 0;
nepataikytiSmugiai = 0;

while (true) {

    let smugisPirmas = rand(0, 1);

    if (smugisPirmas == 1) {
        let smugisDidelis = rand(0, 30);
        ikaltasIlgis += smugisDidelis;
        smugiuSkaicius++;
        console.log('4-tos vinies smugiu skaicius: ', smugiuSkaicius, `ilgis: ${ikaltasIlgis} mm`)
    }

    if (smugisPirmas == 0) {
        nepataikytiSmugiai++;
    }


    if (ikaltasIlgis >= 85) {
        smugiuSkaicius++;
        let likutis = viniesSulindimoGylis - ikaltasIlgis;
        let viniesSulindimoGylisGalutinis = ikaltasIlgis + likutis;
        console.log('*4-tos vinies bendras smugiu skaicius:' + smugiuSkaicius + ",Vinies ikalimo gylis" + viniesSulindimoGylisGalutinis + " " + "mm" + ", Nepataikyta smugiu:" + nepataikytiSmugiai);
        break;
    }
}

nepataikymaiKt = nepataikymaiTr + nepataikytiSmugiai;
rezulatatasKt = rezulatatasTr + smugiuSkaicius;
smugiuSkaicius = 0;
ikaltasIlgis = 0;
nepataikytiSmugiai = 0;

while (true) {

    let smugisPirmas = rand(0, 1);
    if (smugisPirmas == 1) {
        let smugisDidelis = rand(0, 30);
        ikaltasIlgis += smugisDidelis;
        smugiuSkaicius++;
        console.log('5-tos vinies smugiu skaicius: ', smugiuSkaicius, ` bendras ilgis: ${ikaltasIlgis} mm`)
    }
    if (smugisPirmas == 0) {
        nepataikytiSmugiai++;
    }

    if (ikaltasIlgis >= 85) {
        smugiuSkaicius++;
        let likutis = viniesSulindimoGylis - ikaltasIlgis;
        let viniesSulindimoGylisGalutinis = ikaltasIlgis + likutis;
        console.log('*5-tos vinies bendras smugiu skaicius:' + smugiuSkaicius + ", Vinies ikalimo gylis" + viniesSulindimoGylisGalutinis + " " + "mm" + ", Nepataikyta smugiu:" + nepataikytiSmugiai);
        break;
    }
}

nepataikymaiPn = nepataikymaiKt + nepataikytiSmugiai;
rezulatatasPn = rezulatatasKt + smugiuSkaicius;

console.log(`Bendras smugiu skaicius ${rezulatatasPn} ir bendras nepataikytu smugiu skaicius ${nepataikymaiPn}`);







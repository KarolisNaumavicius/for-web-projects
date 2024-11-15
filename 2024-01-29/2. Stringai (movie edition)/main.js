



document.write(`<h1>2. Stringai (movie edition)</h1>`);

console.log(`Veikia`)

document.write(`<h2>Pirma uzuotis</h2>`)

// 1.	Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.
// Pvz:
// Johnny Depp

let actorName = `Jason`;
let actorSurname = `Statham`

document.write(`<p>${actorName} ${actorSurname}</p>`);

document.write(`<h2>Antra uzduotis</h2>`);

// 2. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
// Vardą atspausdinti tik didžiosiom raidėm, o pavardę tik mažosioms.
// Rezultatas: JOHNNY depp

document.write(`<p>${actorName.toUpperCase()} ${actorSurname.toLowerCase()}</p>`);

document.write(`<h2>Trecia uzduotis</h2>`);

// 3.Sukurti du kintamuosius.
// Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus.
// Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
// Rezultatas: JD

let actorNameSurnameFirstLetters = `JS`;

document.write(`${actorNameSurnameFirstLetters}`);

// 4. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus.
// Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
// Rezultatas: NNYEPP

document.write(`<h2>Ketvirta uzduotis</h2>`)

let actorNameSurnameLastThreeLetters = `sonham`

document.write(`<p>${actorNameSurnameLastThreeLetters}</p>`);

// 5. Sukurti kintamąjį su stringu: “An American in Paris”. Jame visas “a” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.
// Rezultatas: *n *meric*n in P*ris

document.write(`<h2>Penkta uzduotis</h2>`)

let aAiP = `"An American in Paris"`;
let replaceAtoAsterisk = aAiP.replace(/a|A/g, "*");

// galima dar taip padaryti

// let string = `An mer`

// string = string.replaceAll(`A`, `*`).replaceAll(`a`, `*`);


console.log(replaceAtoAsterisk);

document.write(`<p>${aAiP.replace(/a|A/g, "*")}</p>`)

// g - global
// i = case insensitive, ignoruojamas skirtumas tarp didziuju ir mazuju raidziu
// - = range
// [] = nurodo ne specifine kombinacija

// .replaceall(/[a-z]/g,) - pakeisti 

// .replaceall(/[0-9]/g,) - pakeisti


//6. Sukurti kintamąjį su stringu: “An American in Paris”. Suskaičiuoti visas “a” (didžiąsias ir mažąsias) raides. Rezultatą atspausdinti.
//Rezultatas: 4

document.write(`<h2>Sesta uzduotis</h2>`);

let countaA = (aAiP.match(/a|A/ig).length);

let countP = (`"An American in Paris"`.match(/P/ig)); // itraukiu P 

document.write(`${countaA}`);

console.log(`${countaA}`);

console.log(`${countP}`);

// 7. Sukurti kintamąjį su stringu: “An American in Paris”. 
// Jame ištrinti visas balses. Rezultatą atspausdinti. 
// Kodą pakartoti su stringais: “Breakfast at Tiffany's”, “2001: A Space Odyssey” ir “It's a Wonderful Life”.
// Rezultatas: n mrcn n Prs

document.write(`<h2>Septinta uzduotis</h2>`);

let replaceVowelToNullaAiP = (aAiP.replace(/a|A|e|E|i|I|o|O|u|U/g, " "));

document.write(`${replaceVowelToNullaAiP}`);

console.log(`${replaceVowelToNullaAiP}`);

let BaT = `"Breakfast at Tiffany's"`;

let replaceVowelToNullBaT = (BaT.replace(/a|A|e|E|i|I|o|O|u|U/g, " "));

document.write(`<br>${replaceVowelToNullBaT}`);

let replaceVowelToNull2001 = (`"2001: A Space Odyssey"`.replace(/a|A|e|E|i|I|o|O|u|U/g, " "));

console.log(`${replaceVowelToNull2001}`);

document.write(`<br>${replaceVowelToNull2001}`);

let replaceVowelToNullWLife = (`"It's Wonderful Life"`.replace(/a|A|e|E|i|I|o|O|u|U/g, " "));

console.log(`${replaceVowelToNullWLife}`);

document.write(`<br>${replaceVowelToNullWLife}`);

// 8. Stringe, kurį generuoja toks kodas: `Star Wars: Episode ${rand(0,5)} ${rand(1,9)} - A New Hope`; Surasti ir atspausdinti epizodo numerį.
// Rezultatas: 5 9

document.write(`<h2>Astunta uzduotis</h2>`);

console.log(`Star Wars: Episode ${rand(0,5)} ${rand(1,9)} - A New Hope`.length);

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor (Math.random() * (max - min + 1) + min);
}

let estring = `Star Wars: Episode ${rand(0,5)} ${rand(1,9)} - A New Hope`;

console.log(estring[19], estring[21]); // pagal pozicijas

document.write(`Star Wars: Episode ${rand(0,5)} ${rand(1,9)} - A New Hope`.length)

// match - surasti nurodyta reiksme



// 9. Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. Stringo ilgis 3 simboliai.
// Rezultatas: jkr

document.write(`<h2>Devinta uzduotis</h2>`);

let lstring = 'abcdefghijklmnopqrstuvwxyz';

console.log(lstring[rand(0, lstring.length - 1)] + lstring[rand(0, lstring.length - 1)] + lstring[rand(0, lstring.length - 1)]);


// galima priskirti funkcijas kintamajam, tik be string kabuciu, bandziau kitu atveju, neveikia
let randlstring = lstring[rand(0, lstring.length - 1)] + lstring[rand(0, lstring.length - 1)] + lstring[rand(0, lstring.length - 1)];

document.write(`${randlstring}`);

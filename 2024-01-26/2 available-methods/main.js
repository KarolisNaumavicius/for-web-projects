let string = `sukurtikieat trirs kintamuosiu ir naud...... ar panaudota rand()`


// Includes metodas grazina true arba false atsakyma ar ieskomas zodis ezifsuttoja nurodytame stringe 
if(string.includes(`rand()  jiems`)) {
    console.log(`stringe radome pamineta funkcija rand()`);
}

// `Labas Pasauli`.includes()

// pvz UTF -16, UTF masto elektros impulsais kompiuteris, ar elektra  yra ar ne. UTF naudojama tokia koduote

string[5]

string = `naudokite funkcija ran().`;

//at() metodas grazina simboli pagal pateikta pozicija
console.log(string.indexOf(-4));

console.log(`-----endswith metodas`);
//endwidth  tikrina ar stringas baigiasi nurodytu zodziu ar fraze
if(string.endsWith(`rand.`)) {
    console.log(`stirngas baigiasi funcikjos pavadinimasu`)
}

//string[2], skaicius 2 yra pozicija (index) arba indeksas

console.log(`----indexoOf metodas---`);

string = `naudikite funckiaja rand.`;

let naujasStringas = string.replaceAll(`rand()`, `random()`);



console.log(`funkcijos pavadinimas pasideda tie ${string.indexOf(`rand()`)}
pozicija`);


console.log(naujasStringas);

//---------------------------------------------

console.log(`----skaiciu apvalinimas`);

// math yra globalus objektas

let skaicius = 3.44545484; // 3,458 i 3 sveika, jeigu 3,568 i 4
let rezultatas = 0;

//suapalinam iki sveikojo skaiciaus
console.log(`suapvalinam skaicius iki sveiko ${Math.round(skaicius)}`);

//suaplvalinimas iki zemesnio sveikojo skaiciau 

skaicius = 3.999999
rezultatas = Math.floor(skaicius);

console.log(`suapvalinam skaicius floor metodu: ${rezultatas}`);

//suapvalinam iki sveikojo sk
skaicius = 3.0000
rezultatas = Math.ceil(skaicius);

console.log(`suapvalintas skaicius ceil metodyu ${rezultatas}`);


//suranda maziausia skaiciu
let maziausias = Math.min(55, 15, 88, 105); // skaiciu keikis neribotas
//suranda didziausias skaiciu
let didziausias = Math.max(55, 15, 88, 105);

console.log(`maziausias skaicius yra: ${maziausias}`);
console.log(`didziausias skaicius yra: ${didziausias}`);







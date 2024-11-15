
/*2.	Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300,
 atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra
  didesnių už 150.
  Skaičiai didesni nei 275 turi būti raudonos spalvos.*/
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.random(Math.floor() * (max - min - 1) - min);
}

let skaiciuojamReiksme = 0;

for (i = 0; i <= 300; i++) {
    document.write(i + ` `);
    console.log(i);
    
    if(i > 150) {

        skaiciuojamReiksme=skaiciuojamReiksme+1;
    
        }
    if(i > 275) {
        console.log(`<p style="color:red">${i}</p>`);
        document.write(`<p style="color:red">${i}</p>`);
    }
    if(i > 275) {
        
    }
}

console.log(`Reiksmiu daugiau nei 150 yra:` + ` ` + skaiciuojamReiksme);

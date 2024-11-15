function rand(min, max) {
    min = Math.ceil (min);
max = Math.floor (max);
return Math.floor (Math.random() * (max - min + 1) + min);

}

let x = rand(0, 40);
let y = rand(0, 20);
let z = (x / y).toFixed(2);

console.log(z);

document.write((x) + ` ` + (y) + ` `+ `=`+ ` ` + (z))



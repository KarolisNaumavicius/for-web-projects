function rand(min, max) {

min = Math.ceil(min)
max = Math.floor(max)
return Math.floor(Math.random() * (max - min +1) + min);

}

let a = (0, 20);
let b = (20, 40);
let c = (40, 60);

let d = (a + b + c) / 3;

console.log(d);

document.write(d);


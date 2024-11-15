
function rand(min, max) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1) + min);
}

let a = rand(0, 2);
let b = rand(0, 2);
let c = rand(0, 2);
let d = rand(0, 2);

let count0 = 0;
let count1 = 0;
let count2 = 0;

if (a === 0) {
    count0++;
  } else if (a === 1) {
    count1++;
  } else if (a === 2) {
    count2++;
  }
  
  if (b === 0) {
    count0++;
  } else if (b === 1) {
    count1++;
  } else if (b === 2) {
    count2++;
  }
  
  if (c === 0) {
    count0++;
  } else if (c === 1) {
    count1++;
  } else if (c === 2) {
    count2++;
  }
  
  if (d === 0) {
    count0++;
  } else if (d === 1) {
    count1++;
  } else if (d === 2) {
    count2++;
  }
  
  console.log("0 =", count0);
  console.log("1 =", count1);
  console.log("2 =", count2);

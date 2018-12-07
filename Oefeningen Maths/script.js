//Max & min
var oplmin = Math.min(7, 5, -12, 6, 32, 18, 14, -2);
console.log(oplmin);

var oplmax=Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
console.log(oplmax);

console.log(oplmax+oplmin);

//Willekeurig 1
var floatspeed = 10.4;
var lowspeed =Math.round(floatspeed);
var highspeed=Math.round(floatspeed)+1;
console.log(lowspeed);
console.log(highspeed);

//Willekeurig 2
console.log(Math.floor(Math.random() * (100 - 50 + 1)) + 50);
console.log(Math.random() * 1 + 0);
console.log(Math.floor(Math.random() * (10 - 1)) + 1);

//Willekeurig 3
var lijst =["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Raptile", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];
console.log(lijst[(Math.floor(Math.random() * (10 - 0)) + 0)]);

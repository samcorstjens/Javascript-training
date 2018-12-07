//
var getallen = [];
var Getal = 1;

while (Getal !=0){
getallen.push(Getal = prompt("Geef een getal"));

}
Array.max = function( array ){
    return Math.max.apply( Math, array );

};

Array.min = function( array ){
    return Math.min.apply( Math, array );

};


console.log(Array.min(getallen));
console.log(Array.max(getallen));

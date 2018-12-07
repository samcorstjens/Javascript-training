//Oefening Fortuinbouwer
let n = 3;
var x = "Programmeur";
var y = "België";
var z ="Lisabet"

console.log("U wordt",x,"en woont in",y,",en bent getrouwd met",z,"met", n, "kinderen.");
//Bereken de leeftijd
var theDate=new Date();
var jaar = theDate.getFullYear();
var Geboortejaar = 1996;

console.log(jaar-Geboortejaar);
//Oefening: Voorspeller
var leeftijd = 22;
var maxleeftijd = 100;
var Overigejaren= maxleeftijd-leeftijd;

console.log("Je hebt nog steeds", Overigejaren, "jaar voordat je de leeftijd van", maxleeftijd,"jaar bereikt heb.");
//Oefening:Prioriteren
let resultaat = (1+2)*3+4/2; //Haken eerst = 3*3+4/2 // vermenigvuldigen en delingen eerst = 9+2 =11!
console.log(resultaat);

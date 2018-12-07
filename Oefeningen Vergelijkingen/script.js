//oefening Talen
const extaal = "fr"; // fr,nl,en
var bericht ;

if (extaal =="fr"){
  bericht = "Bonjour tout le monde";
}else if (extaal=="nl"){
  bericht="Hallo iedereen";
}else if (extaal =="en"){
  bericht="Hello everyone";
};

console.log(bericht);
//oefening Scores weergeven
var score= 96;
var resultaat;

if (score<=50) {
  resultaat = "rang C";
}else if(score<=90){
  resultaat = "rang B";
}else{
  resultaat = "rang A";
};
console.log(resultaat);
//oefening In het meervoud
var enkelvoud = "appel";
var getal = 5;
var resultaat;
if (getal==1) {
  console.log("Ik heb",getal, enkelvoud,".");
}else{
  console.log("Ik heb",getal,enkelvoud+"s",".");
}

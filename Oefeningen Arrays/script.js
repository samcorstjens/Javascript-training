//oefening optellen
var nummers=[1,2,3,4,5,6,7,8,9];
var opl=0;

for (i=0;i<9;i++){
  opl=opl+nummers[i];
}
console.log(opl);
//De beste keuze
var acteur=["Stalone","Cruiz","Samuel"];
for(i=1;i<4;i++){
  console.log("Nummer",i,"is",acteur[i-1])
}
//De beste keuze : geavanceerd
var acteur=["Stalone","Cruiz","Samuel"];
var hoeveelste;
for(i=1;i<4;i++){
  if (i==1){
    hoeveelste="eerste";
  }else if (i==2){
    hoeveelste="tweede";
  }else if (i==3) {
    hoeveelste="derde";
  }
  console.log("De",hoeveelste, "is",acteur[i-1])
}
//Klonen
var Game = ["Mario","Luigi","Peach"]
Game.push("Bowser");
console.log(Game);

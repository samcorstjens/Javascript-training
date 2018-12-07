//Oefening : Even en oneven
var isEven = function(number) {
  // Your code goes here!
  if (((number/2) - Math.floor(number/2)) === 0) {
    return true;
  } else {
    return false;
  };
};

for(var i =0;i<=20;i=i+1){
  var ant=isEven(i);
if (ant==true){
  console.log(i + " is even.");
}else{
  console.log(i);
}
}
//Oefening Scoren toewijzen
for (var i=0;i<=10;i++){
var ant = i*9;
var antzin =(i + " * 9 = " + ant);
console.log(antzin);
}
//Oefening Scores toewijzen
var scorebadge;
var resultaat = function(nummer){
if (nummer>90){
  return scorebadge="A";
}else if (nummer>80){
  return scorebadge="B";
}else if (nummer>70){
  return scorebadge="C";
}else if (nummer>65){
  return scorebadge="D";
}else if (nummer<=65){
  return scorebadge="F";
}

}
for (var i=0;i<=100;i++){
var opl=resultaat(i);
console.log("Voor ",i,"punten heb je graad", scorebadge);

}

//piramide
function piramide (aantal) {

  for (var i = 1; i <= aantal; i++) {
    var row = '';

    for (var x = 1; x <= i; x++) {
      row += '*';
    }

    console.log(row);
  }
}

piramide(5);

//Non-player character
let character = {
name : "Samuel",
Age : 22,
Wapens:["Swaard","Schild","Kruisboog","Pantser"],
giveltem : function(waarde){
  return character.Wapens[waarde];
}
}
console.log(character.name);
console.log(character.Age);
console.log(character.giveltem((Math.floor(Math.random() * (4 - 0)) + 0)));

//Shop
let object={
kopen:["Zwaard","Bijl","Scepter","schype"],
title:["Beheader","Axe-you-a-question","leg-scept","R"],
physic:[8,9,6,10],
magic:[6,3,10,9],
minLevel:[5,8,3,6],
available:["No","Yes","Yes","Yes"],
showitem:function(){
  console.log(object.kopen);
},
ava:function(){
  for (i =0;i<4;i++){
  if (object.available[i]=="Yes"){
    console.log(object.kopen[i])
  }else{

  }
}
}
}
object.showitem();
object.ava();
//character
var mainCharacter= {
  name: "Samuel the Thunderer",
  level:100,
  life:100000,
  weapon:{
    name:"Thunder-gladiator",
    damage:80
  },
  attack:function(){
    console.log(mainCharacter.name,"aanval met het wapen",mainCharacter.weapon.name,"de schade is",(mainCharacter.level*mainCharacter.weapon.damage))
  },
}

mainCharacter.attack();

var Tegenstander={
  name:"Yaku the master of Chaos",
  level:100,
  life:1000,
  Weapon: {
    name:"Blade of chaos",
    damage:70
  },
  attackv:function(){
    console.log(Tegenstander.name,"aanval met het wapen",Tegenstander.Weapon.name,"de schade is",(Tegenstander.level*Tegenstander.Weapon.damage))
  },
  receivedamage:function(){
    console.log(Tegenstander.name,"kreeg",(mainCharacter.level*mainCharacter.weapon.damage),"Schade!")
  },
  Result:function(){
    console.log(mainCharacter.name,"attacks",Tegenstander.name);
    console.log("With the weapon", mainCharacter.weapon.name);
    console.log("And inflicts damage on it :",(mainCharacter.level*mainCharacter.weapon.damage));
    console.log(Tegenstander.name,"has now",(Tegenstander.life-(mainCharacter.level*mainCharacter.weapon.damage)));
  }
}
Tegenstander.attackv();
Tegenstander.receivedamage();
Tegenstander.Result();

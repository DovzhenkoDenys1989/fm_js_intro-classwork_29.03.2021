'use strict';

const object = {
height: 100,
width: '200px',
display: true,
testFun: function(num) {
  console.log(num);
},
name:'John',
}
object.testFun(5);



const cat1 ={
  name:'Murzik',
  color:'black',
  breed:'Sphinx',
  age = 5,
  isSleeping: true,
  isMale: true,
  run: function(){
    console.log('i\'m running!!!');
  },
  voice:function(){
    console.log('Мяу')
  },
  meow:function(){
    console.log("MEOW!");
  }
}
cat.run();

//cat.isSleeping = false;
//cat.color = 'white';
//delete cat.breed;
//cat.meow = function(){
 // console.log("MEOW!");
//}
//cat.age = 5;

console.log(cat);



const cat2 ={
  name:'Barsik',
  color:'white',
  breed:'Persian',
  age = 4,
  isSleeping: false,
  isMale: true,
  run: function(){
    console.log('i\'m running!!!');
  },
  voice:function(){
    console.log('Мяу')
  },
  meow:function(){
    console.log("MEOW!");
  }
}
cat2.run();

const Cat = function(name, color, age, breed, isSleeping, isMale){
  this.name = name;
  this.furColor = color;
  this.age = age;
  this.breed = breed;
  this.isSleeping = isSleeping;
  this.isMale = isMale;
  this.run = function(){
    console.log('i\'m running!!!');
  }
  this.voice = function(){
    console.log('Мяу')
  }
  this.meow = function(){
   return this.isSleeping ? 'Zzzzzzz...' : 'Meow!';
  }
  this.toggleSleep = function(){
    this.isSleeping = !this.isSleeping;
  }
  this.incAge = function(){
    this.age++;
  }

}

const cat1 = new Cat('Barsik', 'white', 3, 'Sphinx', false, true);
cat1.meow();




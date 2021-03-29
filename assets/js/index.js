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



const cat ={
  name:'Murzik',
  color:'black',
  breed:'Sphinx',
  isSleeping: true,
  isMale: true,
  run: function(){
    console.log('i\'m running!!!');
  },
  voice:function(){
    console.log('Мяу')
  }
}
cat.run();

cat.isSleeping = false;
cat.color = 'white';



const cat2 ={
  name:'Nike',
  color:'white',
  breed:'persidskyi',
  isSleeping: false,
  isMale: true,
  run: function(){
    console.log('i\'m running!!!');
  },
  voice:function(){
    console.log('Гав')
  }
}
cat2.run();

console.log(cat);

delete cat.breed;

cat.meow = function(){
  console.log("MEOW!");
}

cat.age = 5;
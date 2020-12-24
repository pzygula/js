'use strict';

//Liczby

const tab = [];
var liczba1=200;
var liczba2=1;

for (var i=liczba1;i>=liczba2;i--) {
    if(i%2==0){
        tab.push(i);
    }
}

const div = document.querySelector("#numbers");
div.innerHTML= `<p>Liczby parzyste od ${liczba1} do  ${liczba2}:</p> ${tab}`;

//Znikający link 
 
var link = [];

for(var k=1;k<=5;k++){
    link[k]= document.querySelector(`#button${k}`);
    link[k].onclick = style;
}

name = " container__button--hidden";

function style () {
        this.className += name;
}
   
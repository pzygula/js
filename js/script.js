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
div.innerHTML= `<p>Liczby nieparzyste od ${liczba1} do  ${liczba2}:</p> ${tab}`;

//Znikający link 
 
var link1 = document.querySelector('#button1')
var link2 = document.querySelector('#button2')
var link3 = document.querySelector('#button3')
var link4 = document.querySelector('#button4')
var link5 = document.querySelector('#button5')

name = " container__button--hidden";

link1.onclick = style;
link2.onclick = style;
link3.onclick = style;
link4.onclick = style;
link5.onclick = style;

function style () {
        this.className += name;
}
   
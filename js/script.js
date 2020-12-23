'use strict';

//Liczy

const tab = [];

for (var i=200;i>=1;i--) {
    if(i%2==0){
        tab.push(i);
    }
}

const div = document.querySelector("#numbers");
div.innerText = tab;

//Znikający link 
 
var link1 = document.querySelector('#button1')
var link2 = document.querySelector('#button2')
var link3 = document.querySelector('#button3')

name = " container__button--hidden";

link1.onclick = style;
link2.onclick = style;
link3.onclick = style;

function style () {
        this.className += name;
}
   
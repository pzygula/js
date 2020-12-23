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
 
const link = document.querySelector('a')

var button = document.getElementById('show_button')
button.addEventListener('click',hideshow,false);

function hideshow() {
    document.getElementById('hidden-div').style.display = 'block'; 
    this.style.display = 'none'
}   

   
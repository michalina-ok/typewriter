"use strict";

let original = document.querySelector('#typewriter').textContent;
let counter = 0;
console.log(counter);

const typekey_sound1 = document.querySelector('#typekey1');
const typekey_sound2 = document.querySelector('#typekey2');
const spacesound = document.querySelector('#typespace')
const typelast_sound = document.querySelector('#typelastkey')
loop();


function loop() {
    if (counter <= original.length) {
        //adding letters
        playSound();
        document.querySelector('#typewriter').textContent = original.slice(0,counter);

        counter +=1;
    }
    
    setTimeout(loop, 500);
}

function playSound() {
    if (original[counter -1 ] === ' ') {
        spacesound.play();
        console.log(counter);
    }
    else if (counter === original.length) {
        typelast_sound.play();
    }
    
}



"use strict";

let original = document.querySelector('#typewriter').textContent;
let counter = 0;
console.log(counter);

loop();

function loop() {
    if (counter < original.length) {
        //adding letters

        document.querySelector('#typewriter').textContent = original.slice(0,counter);

        counter +=1;
    }

    setTimeout(loop, 500);
}



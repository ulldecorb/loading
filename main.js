/*    
    TODO:

    1# create dom element && add size and class "snake"
    2# fade-in : insert child nodes on container by delay
    3# fade-out : fade out transition elements by delay

*/

const container = document.getElementById('container');
const fadeInDelay = [ 700, 1400, 2100, 2800, 3500, 4200, 4900, 5600 ];
const fadeOutDelay = [ 1750, 1500 , 1250, 1000, 750, 500, 250, 0 ];
const snakeSize = [ '30.6vmin', '36.25vmin', '41.88vmin', '47.5vmin', '53.13vmin', '58.75vmin', '64.36vmin', '70vmin' ];

// change listener to window.onload 
document.body.addEventListener("click", fadeOutSnakes);

(function createSnakes () {
    for ( i = 0; i < 8; i ++) {
        const spanSize = snakeSize[i]
        const delay = fadeInDelay[i];
        const span = document.createElement("span");
        span.style.width = spanSize;
        span.style.height = spanSize;
        span.classList.add('snake');

        setTimeout(() => {
            container.appendChild(span);
        }, delay);
    }
})()

function fadeOutSnakes () {
    const snakes = document.getElementsByClassName("snake");
    for (i = 7; i >= 0; i --) {
        const snake = snakes[i];
        const delay = fadeOutDelay[i];

        setTimeout(() => {
            snake.style.height = "150vmax";
            snake.style.width = "150vmax";
            snake.style.border = '4px solid rgb(110, 92, 12)'
        }, delay);
    }

    setTimeout(() => {
        container.style.opacity = '0';
    }, 2100);
}
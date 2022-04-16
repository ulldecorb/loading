/*    
    TODO:

    1# create dom element && add class "snake"
    2# fade-in : insert child nodes on container
    3# fade-out : fade out loading element

*/

const container = document.getElementById('container');
const fadeInDelay = [ 100 , 1000, 1500, 2000, 2500, 3000 ];
const fadeOutDelay = [ 1500 , 1250, 1000, 750, 500, 250 ];
const snakeSize = [ '30vmin', '37vmin', '44vmin', '51vmin', '58vmin', '65vmin' ];

// change listener to window.onload 
document.body.addEventListener("click", fadeOutSnakes);

(function createSnakes () {
    for ( i = 0; i < 6; i ++) {
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
    for (i = 5; i >= 0; i --) {
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
//     TODO
// 
//   1# clonar node ] add class "snake"
//   2# fade-in : insert child nodes
//   3# fade-out 
// 
// 
// 



    const container = document.getElementById('container');
    const loader = document.getElementById('load');
    const snakes = document.getElementsByClassName("snake");

    document.body.addEventListener("click", fadeOut);

const colorBox = [ "red", "blue", "cyan", "pink", "green", "yellow"]
const animationTimer = ["0.5s;", "1s", "1.5s", "2s", "2.5s", "3s"]
const snakeSize = [ "63vmin", "56.7vmin", "51.3vmin", "45.927vmin", "41.334vmin", "37.2vmin" ]


function fadeOut () {
    for ( i = 0; i < snakes.length; i ++) {
        const snake = document.getElementsByClassName("snake")[i];
        const timeMultipler = 250 * (1 + i);
        setTimeout(() => {
            snake.style.height = "125vmax";
            snake.style.width = "125vmax";
            snake.style.border = '8px solid rgb(110, 92, 12)'
        }, timeMultipler);
    }
    setTimeout(() => {
        container.style.opacity = '0';
    }, 2100);
}
document.body.addEventListener("click", fadeOut);
const IZQUIERDA = document.getElementById('left-arrow');
IZQUIERDA.addEventListener('click',goizq);
const DERECHA = document.getElementById('right-arrow');
DERECHA.addEventListener('click',goder);
const CAROUSEL = document.querySelector('.contenedor-carousel');
var segmento = 1;


function goizq(){
    CAROUSEL.scrollLeft -= 300 * 3;
}
function goder(){
    CAROUSEL.scrollLeft += 300 * 3;
}
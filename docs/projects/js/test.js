// obtener elemento link
var style = document.getElementById('Main_Style');
// path standar de los archivos css
var path = './css/';
// archivo css para mobiles
var mobiles = 'mobile-styles.css';
// archivo css para computadoras
var desktop = 'desktop-styles.css';
// comparacion de ancho de pantalla
if(window.outerWidth >= 1024){
    // si es mayor o igual a 1024 px
    style.href = path + desktop;
}
else{
    // si es menor
    style.href = path + mobiles;
}

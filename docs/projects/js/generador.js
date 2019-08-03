let canvas = document.getElementById('Canvas');
let lienzo = canvas.getContext('2d');
let info = 
[
    radio = document.getElementById('radio').value,
    nodes = document.getElementById('nodos').value,
    mult =  document.getElementById('x').value,
    color = document.getElementById('ray_color').value
];


// testlienzo();
function testlienzo (){
    lienzo.fillStyle = 'rgb(100,180,30)';
    lienzo.fillRect(0,0,canvas.width,canvas.height);
}
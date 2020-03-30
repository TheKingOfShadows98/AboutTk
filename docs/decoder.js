
// Carga el documento .txt que contiene la historia
function loadDoc() {

    
    var txt = '';
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
    if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
        txt = xmlhttp.responseText;
    }
    };
    xmlhttp.open("GET","stories/historia.txt",true);
    xmlhttp.send();
    remplazarCont(txt);
    let contenido = txt.split(';');
    contenido.map(x => remplazarCont(x));
    contenedor.innerHTML += Contenido;
}




// reemplaza las definiciones ej(Titulo:) a formato html
function remplazarCont(rawContent) {
    if(rawContent.include('Titulo:')){
        Contenido += rawContent.replace('Titulo:', '<h2 class = "titulo-texto">') + '</h2>';
    }
    if(rawContent.include('narrador:')){
        Contenido += rawContent.replace('narrador:','<p class = "narrador-texto">') + '</p>';
    }
    
    if(rawContent.include('dialogo:')){
        Contenido += rawContent.replace('dialogo:','<p class = "dialogo-texto">') + '</p>';
    }
    
    if(rawContent.include('acotacion:')){
        Contenido += rawContent.replace('acotacion:','<p class = "acotacion-texto">') + '</p>';
    }

}
var Contenido;
var contenedor = document.getElementById('contenedor');
loadDoc();

function loadDoc(NameDoc) {
    var url = "stories/"+ NameDoc + ".txt";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        organizar(this.responseText);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
function organizar (texto_plano){
    let contenidos = texto_plano.split('<');

    contenidos.map(x => reemplazar(x));

}
function reemplazar(str) {
    let res = "";
    if(str.includes("Titulo:")){
        res = str.replace("Titulo:", '<h2 class= "titulo">')
        res += "</h2>";
    }else if(str.includes("dialogo:")){
        res = str.replace("dialogo:", '<p class = "dialogo-texto">');
        res += "</p>";
    }
    if(str.includes("acotacion:")){
      res = str.replace("acotacion:", '<p class = "acotacion-texto">');
      res += "</p>";
  }
  if(str.includes("narrador:")){
    res = str.replace("narrador:", '<p class = "narrador-texto">');
    res += "</p>";
}
    contenedor.innerHTML += res;
}

var contenedor = document.getElementById('demo');

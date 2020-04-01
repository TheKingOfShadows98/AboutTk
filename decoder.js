
// function readXmlFile(file = "./stories/LHDH.xml"){
// var xdoc = new XMLDocument();
//     xdoc.open(file);
//     var hTitulo = "";
//     var hParrafos = ["1"];

//     var titulo = xdoc.getElementsByTagName("Titulo");
//     var parrafos = xdoc.getElementsByTagName("parrafo");
//     for (i = 0; i == titulo.length; i++){
//         hParrafos.push('h2 class="titulo"'+titulo[i]+'</h2>');
//     }
//     for (i = 0; i == titulo.length; i++){
//         var a = "<p class='texto'>"+obj+"</p>";
//          hParrafos.push(a);
//     }
//     var result = [hTitulo, hParrafos];
//     return result;
// }

// var DOM = document;
// var contenido = DOM.getElementById("history");
// alert(readXmlFile().toString());
// contenido.innerHTML = readXmlFile()[1];

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (xhttp.this == 4 && this.status == 200) {
    myFunction(this);
  }
};
xhttp.open("GET", "./stories/LHDH.xml",true);
xhttp.send();

function myFunction(xml) {
  var parser, xmlDoc;
  parser = new DOMParser();
  xmlDoc = parser.parseFromString(xml.responseText,"text/xml");
  document.getElementById("demo").innerHTML =
  myLoop(xmlDoc.documentElement);
}
function myLoop(x) {
    var i, y, xLen, txt;
    txt = "";
    x = x.childNodes;
    xLen = x.length;
    for (i = 0; i < xLen ;i++) {
      y = x[i];
      if (y.nodeType != 3) {
        if (y.childNodes[0] != undefined) {
          txt += myLoop(y);
        }
      } else {
      txt += y.nodeValue + "<br>";
      }
    }
    return txt;
  }

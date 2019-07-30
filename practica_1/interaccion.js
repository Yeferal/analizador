console.log("hola");

var texto;
var respuesta;
var cadena
var numeros=["0","1","2","3","4","5","6","7","8","9"];
var letras=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
 "m", "n", "o", "p", "q", "r", "s", "t", "u","v","w","x", "y","z"];
 var simbolos=["#","%","@",".",",","/","&","!","$"];

// Captura la palabra de la caja de texto le asigna un valor a la variable y la separa en cadenas
function capturar(){
  console.log("Se presiono una tecla");
  texto=document.getElementById("palabra");
  cadena=(texto.value).split("");
  primer();
}


// analiza el primer caracter para determinar el tipo de restriccion que tendra
function primer() {
  if (numeross(0)){
    validar(soloN());
  }else if (letrass(0)) {
    validar(soloL());
  }else {
    validar(soloS());
  }
}
// metodo para cuando solo sean numeros
function soloN(){
  for (var i = 0; i < cadena.length; i++) {
    if (numeross(i)) {
    }else {
      respuesta="Error";
      return false;
    }
  }
  respuesta="Numeros";
  return true;
}
//metodo para las letras
function soloL() {
  for (var i = 0; i < cadena.length; i++) {
    if (letrass(i)) {
    }else {
      if (simboloss(i)) {
        respuesta="Error";
        return false;
      }
    }
  }
  respuesta="Letras";
  return true;
}
//metodo para simbolos
function soloS() {
  for (var i = 0; i < cadena.length; i++) {
    if (simboloss(i)) {
    }else {
      respuesta="Error";
      return false;
    }
  }
  respuesta="Simbolos";
  return true;
}
//Analiza un caracter de numeros y retorna un resultado
function numeross(posicion) {
  for (var i = 0; i < numeros.length; i++) {
    if (cadena[posicion]=== numeros[i]) {
      i=numeros.length;
      return true;
    }
  }
  return false;
}
//Analiza un caracter de letra y retorna un resultado
function letrass(t) {
  for (var i = 0; i < letras.length; i++) {
    if (cadena[t]== letras[i]) {
      i=letras.length;
      return true;
    }
  }
  return false;
}
//Analiza un caracter de simbolos y retorna un resultado
function simboloss(t) {
  for (var i = 0; i < simbolos.length; i++) {
    if (cadena[t]== simbolos[i]) {
      return true;
    }
  }
  return false;
}
//recive una respuesta para determinar el tipo de texto que hira en la tabla 
function validar(y) {
  if (y) {
    respuestas(respuesta,true);
  }else {
    respuestas(respuesta,false);
  }
}
//ingresa los datos en la tabla
function respuestas(resu,color){
  if (color) {
    datos.innerHTML = datos.innerHTML + "<tr><td>"+texto.value+"</td><td>-------</td><td>"+resu+"</td></tr>";
  }else{

    datos.innerHTML = datos.innerHTML + "<tr style=\"color:red\";><td >"+texto.value+"</td><td>-------</td><td>"+resu+"</td></tr>";
  }

	console.log("Termina");
}

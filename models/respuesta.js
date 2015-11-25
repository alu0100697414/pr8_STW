function Respuesta(x){

  // Si es entero o cadena
  if(typeof(x)==='string' || typeof(x)==='number'){
    return function(res){return res === x;};
  }

  // Si es una expresión regular
  else if(x instanceof RegExp){
    return function(res){return res.match(x);};
  }

  // Si es una expresión regular
  else if(x instanceof Array){
    return function(res){return res === x;};
  }

  // Si es una funcion
  else {
    return x;
  }
}

module.exports = Respuesta;

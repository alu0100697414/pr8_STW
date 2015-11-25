var Pregunta = require('../models/pregunta.js');

function PreguntaSelecSimple(x, array) {
  Pregunta.call(this);

  this.pregunta_ = x;
  this.array_ = array;
}

PreguntaSelecSimple.prototype = new Pregunta();

PreguntaSelecSimple.prototype.constructor = PreguntaSelecSimple;

PreguntaSelecSimple.prototype.vista = function(){
  var vista = [];

  for(var i=0; i<this.array_.length; i++){
    vista[i] = "<input type='radio' name='transporte' value=" + (i+1) + ">" + this.array_[i];
  }

  return vista;
}

PreguntaSelecSimple.prototype.get_pregunta = function(){
  return this.pregunta_;
}

module.exports = PreguntaSelecSimple;

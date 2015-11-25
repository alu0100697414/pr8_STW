var Pregunta = require('../models/pregunta.js');

function PreguntaSelecMultiple(x, array) {
  Pregunta.call(this);

  this.pregunta_ = x;
  this.array_ = array;
}

PreguntaSelecMultiple.prototype = new Pregunta();

PreguntaSelecMultiple.prototype.constructor = PreguntaSelecMultiple;

PreguntaSelecMultiple.prototype.vista = function(){
  var vista = [];

  for(var i=0; i<this.array_.length; i++){
    vista[i] = "<input type='checkbox' name='transporte' value=" + (i+1) + ">" + this.array_[i];
  }

  return vista;
}

PreguntaSelecMultiple.prototype.get_pregunta = function(){
  return this.pregunta_;
}

module.exports = PreguntaSelecMultiple;

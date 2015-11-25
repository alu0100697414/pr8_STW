var Pregunta = require('../models/pregunta.js');

function PreguntaSelecSimple(x, array) {
  Pregunta.call(this);

  this.pregunta_ = x;
  this.area_ = "multiple";
}

PreguntaSelecSimple.prototype = new Pregunta();

PreguntaSelecSimple.prototype.constructor = PreguntaSelecSimple;

PreguntaSelecSimple.prototype.get_area = function(){
  return this.area_;
}

PreguntaSelecSimple.prototype.get_pregunta = function(){
  return this.pregunta_;
}

module.exports = PreguntaSelecSimple;

var Pregunta = require('../models/pregunta.js');

function PreguntaCorta(x) {
  Pregunta.call(this);

  this.pregunta_ = x;
}

PreguntaCorta.prototype = new Pregunta();

PreguntaCorta.prototype.constructor = PreguntaCorta;

PreguntaCorta.prototype.vista = function(){
  return "<input type='text' name='respuesta' placeholder='Responda aquí'' />";
}

PreguntaCorta.prototype.get_pregunta = function(){
  return this.pregunta_;
}

module.exports = PreguntaCorta;

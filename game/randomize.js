// Para poder empezar a refactorizar un archivo tan grande como game
// Lo primero que haria seria intentar extraer cosas a archivos
// Así puedo ver mejor que dependencias tienen o no 
// Y a partir de ahi, con archivos mas pequeños, intentar mejorar
// Otro paso es ver donde hay codigo repetido
// Para poder unificarlo, tener menos codigo, con lo que menos errores
// Y mas facil de leer
function randomize(imageLength) {

  const randomNumber = Math.round((Math.random() * (imageLength - 1)))

  return randomNumber
}
//Ejercicio 4: Encontrar la palabra “error” en un mensaje 
const readline = require("readline"); 

const rl = readline.createInterface({ 

  input: process.stdin, 

  output: process.stdout 

}); 

rl.question("Ingrese el mensaje del programador: ", (mensaje) => { 

  let posicion = mensaje.indexOf("error"); 

  if (posicion !== -1) { 

    console.log(`La palabra "error" aparece en la posición: ${posicion}`); 

  } else { 

    console.log('La palabra "error" no se encontró en el mensaje.'); 

  } 

  rl.close(); 

}); 
// Ejercicio 3: Mostrar solo los últimos 4 caracteres de un código generado automáticamente 
const readline = require("readline"); 

const rl = readline.createInterface({ 

  input: process.stdin, 

  output: process.stdout 

}); 

rl.question("Ingrese el código generado automáticamente: ", (codigo) => { 

  // escogemos los últimos 4 caracteres 
  let ultimos4 = codigo.slice(-4); 

  console.log(`Últimos 4 caracteres: ${ultimos4}`); 

  rl.close(); 

}); 
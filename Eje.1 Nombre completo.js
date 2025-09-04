//Ejercicio 1: Nombre completo (sin espacios al inicio o final, contar caracteres sin espacios) 
const readline = require("readline"); 
 
const rl = readline.createInterface({ 

  input: process.stdin, 

  output: process.stdout 

}); 

rl.question("Ingrese su nombre completo: ", (nombre) => { 

  //  Eliminamos los espacios al inicio y final 

  let nombreTrim = nombre.trim(); 

  // Conteo caracteres sin espacios 

  let cantidadCaracteres = nombreTrim.replace(/\s+/g, "").length; 

  console.log(`Nombre normalizado: '${nombreTrim}'`); 

  console.log(`Cantidad de caracteres (sin espacios): ${cantidadCaracteres}`); 

  rl.close(); 

}); 
// Ejercicio 2: Correo electrónico (@gmail.com y minúsculas) 
const readline = require("readline"); 

const rl = readline.createInterface({ 

  input: process.stdin, 

  output: process.stdout 

}); 

rl.question("Ingrese su correo electrónico: ", (correo) => { 

  // Convertimos a minúsculas 

  let correoMin = correo.toLowerCase(); 

  // comprobamos si es dominio @gmail.com 

  let esGmail = correoMin.endsWith("@gmail.com"); 

  console.log(`Correo normalizado: ${correoMin}`); 

  if (esGmail) { 

    console.log("Dominio válido: Sí (@gmail.com)"); 

  } else { 

    console.log("Dominio válido: No"); 

  } 

  rl.close(); 

}); 
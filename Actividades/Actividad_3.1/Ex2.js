const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

  rl.question('Indica cuantos grados de temperatura quieres convertir: ', (answer) => {
    rl.question('Elige el formato de temperatura que quieras obtener: ', (tipo) => {
    if (tipo == "Fahrenheit") {
      answer = (answer * 9/5 + 32).toFixed(2);
        console.log(`La temperatura en Fahrenheit es: ${answer}°F`);
    } else {
      answer = (answer -32 * 5/9).toFixed(2);
        console.log(`La temperatura en Celsius es: ${answer}°C`);
    }
  
    rl.close();
    })
});
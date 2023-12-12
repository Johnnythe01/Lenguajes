const numeros = [1,2,3,4,5];

function calcularSuma(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++)  {
        suma += array [i];
    }
    return suma;
}

function calcularMedia(array) {
    const suma = calcularSuma (array);
    return suma / array.length;
}

function encontrarMaximo(array) {
    return Math.max(...array);
}

function encontrarMinimo(array) {
    return Math.min(...array);
}

console.log("Array:", numeros);
console.log("Suma:", calcularSuma(numeros));
console.log("Media:", calcularMedia(numeros));
console.log("Maximo:", encontrarMaximo(numeros));
console.log("Minimo:", encontrarMinimo(numeros));
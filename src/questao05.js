/*Escreva um algoritmo para fazer a verificação de triângulos. Você deve solicitar 3 valores inteiros ao usuário e com essas informações, 
primeiramente você deve verificar se é possível montar um triângulo com esses valores (SE É UM TRIÂNGULO VÁLIDO). 
Para isso, cada um dos lados deve ser menor que a soma dos outros dois. 
Caso, não seja válido, o algoritmo deve simplesmente informar que os valores são inválidos. Caso contrário, 
você ainda deve classificar qual é o tipo de triângulo, se é: Equilátero, Isósceles ou Escaleno.

- Equilátero: todos os lados iguais;
- Isósceles: dois lados iguais;
- Escaleno: todos os lados diferentes;*/

import leia from "readline-sync"

console.log("VERIFICACAO TRIANGULO");
var lado1 = leia.questionFloat("Informe o tamanho do lado 1: ");
var lado2 = leia.questionFloat("Informe o tamanho do lado 2: ");
var lado3 = leia.questionFloat("Informe o tamanho do lado 3: ");

var ver_lado1 = lado2 + lado3;
var ver_lado2 = lado1 + lado3;
var ver_lado3 = lado1 + lado2;

if (ver_lado1 > lado1 && ver_lado2 > lado2 && ver_lado3 > lado3){
    console.log("Este e um triangulo valido.");
    if (lado1 == lado2 && lado2 == lado3 && lado1 == lado3) {
        console.log("Equilatero.");
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        console.log("Isosceles.");
    } else {
        console.log("Escaleno.");
    }
} else {
    console.log("Este e um triangulo invalido.");
}
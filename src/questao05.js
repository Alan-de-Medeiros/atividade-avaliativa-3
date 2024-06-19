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
var LADO1 = leia.questionFloat("INFORME O TAMANHO DO LADO 1: \n");
var LADO2 = leia.questionFloat("INFORME O TAMANHO DO LADO 2: \n");
var LADO3 = leia.questionFloat("IINFORME O TAMANHO DO LADO 3: \n");

var VerLado1 = LADO2 + LADO3;
var VerLado2 = LADO1 + LADO3;
var VerLado3 = LADO1 + LADO2;

if (VerLado1 > LADO1 && VerLado2 > LADO2 && VerLado3 > LADO3){
    console.log("TRIANGULO  VALIDO.");
    if (LADO1 == LADO2 && LADO2 == LADO3 && LADO1 == LADO3) {
        console.log("EQUILATERO.");
    } else if (LADO1 == LADO2 || LADO1 == LADO3 || LADO2 == LADO3){
        console.log("ISOSCELES.");
    } else {
        console.log("ESCALENO.");
    }
} else {
    console.log("TRIANGULO INVALIDO.");
}
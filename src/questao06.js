/*Faça um algoritmo que solicite ao usuário um ano (2020, 2021, etc) e determine se ele é um ano bissexto ou não. Um ano é bissexto se ele for divisível por 4, mas não por 100, exceto se for divisível por 400. O software deve informar se o ano informado é bissexto ou não.

- É divisível por 4.
- Não é divisível por 100, a menos que seja também divisível por 400.*/

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
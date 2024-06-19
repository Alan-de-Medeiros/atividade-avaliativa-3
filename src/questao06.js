/*Faça um algoritmo que solicite ao usuário um ano (2020, 2021, etc) e determine se ele é um ano bissexto ou não. Um ano é bissexto se ele for divisível por 4, mas não por 100, exceto se for divisível por 400. O software deve informar se o ano informado é bissexto ou não.

- É divisível por 4.
- Não é divisível por 100, a menos que seja também divisível por 400.*/

import leia from "readline-sync"

var ano = leia.questionInt("INFORME O ANO: \n ");

var D = ano % 4 
var D2 = ano & 100 
var D3 = ano & 400
if(D == 0 && D2 != 0) {
console.log("ANO BISSEXTO.");
} else if(D == 0 && D3 == 0){
        console.log("ANO BISSEXTO.");
} else{
    console.log("NAO E UM ANO BISSEXTO.");
}
/*Desenvolva um algoritmo que solicite ao usuário três notas (de 0.0 a 10.0) de um estudante e os respectivos pesos de cada uma dessas notas. 
O algoritmo deve calcular e exibir a média ponderada das notas.

`Média Ponderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3)`*/

import leia from "readline-sync"

var N1 = leia.questionFloat("INFORME A NOTA 1: \n");
var PN1 = leia.questionFloat("INFORME PESO DA NOTA 1: \n");
var N2 = leia.questionFloat("INFORME NOTA 2: \n");
var PN2 = leia.questionFloat("INFORME PESO DA NOTA 2: \n");
var N3 = leia.questionFloat("INFORME NOTA 3: \n");
var PN3 = leia.questionFloat("INFORME PESO DA NOTA 3: \n");

var mediaPonderada = ((N1 * PN1) + (N2 * PN2) + (N3 * PN3)) / (PN1 + PN2 + PN3);
console.log("A média ponderada das notas é: " + mediaPonderada);
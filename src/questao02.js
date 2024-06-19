/*Escreva um algoritmo que calcule o salário de um funcionário que recebe por hora de
trabalho. Você deve solicitar ao usuário as seguintes informações: Quantidade de horas trabalhadas, Valor da hora trabalhada e percentual de desconto. 
Após solicitar essas informações, o algoritmo deve apresentar o valor do salário bruto,o valor do desconto e o valor do salário líquido. 
(Opcional, utilizar o INTL para formatar saída).*/

import leia from "readline-sync"

var HT = leia.questionFloat("INFORME A QUANTIDADE DE HORAS TRABALHADAS(HT): \n ");
var VH = leia.questionFloat("INFORME O VALOR DE HORAS TRABALHADAS: \n ");
var PD = leia.questionFloat("INFORME O PERCENTUAL DE DESCONTO: \n ");

var bruto = HT * VH;
var desconto = bruto / 100 * PD;
var liquido = bruto - desconto;
console.log("Salario bruto: \n R$" + bruto);
console.log("Total descontado: \n R$" + desconto);
console.log("Salario liquido: \n R$" + liquido);
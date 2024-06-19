/*Escreva um algoritmo que calcule o salário de um funcionário que recebe por hora de
trabalho. Você deve solicitar ao usuário as seguintes informações: Quantidade de horas trabalhadas, Valor da hora trabalhada e percentual de desconto. 
Após solicitar essas informações, o algoritmo deve apresentar o valor do salário bruto,o valor do desconto e o valor do salário líquido. 
(Opcional, utilizar o INTL para formatar saída).*/

import leia from "readline-sync"

var horas_trabalhadas = leia.questionFloat("Informe a quantidade de horas trabalhadas: ");
var valor_hora = leia.questionFloat("Informe o valor da hora trabalhada: ");
var percentual_desconto = leia.questionFloat("Informe o percentual de desconto: ");

var bruto = horas_trabalhadas * valor_hora;
var desconto = bruto / 100 * percentual_desconto;
var liquido = bruto - desconto;
console.log("Salario bruto: R$" + bruto);
console.log("Total descontado: R$" + desconto);
console.log("Salario liquido: R$" + liquido);
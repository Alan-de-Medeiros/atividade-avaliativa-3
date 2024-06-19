/*Um comerciante comprou um produto e quer vendê-lo com lucro de 45% se o valor da
compra for menor que R$20,00; caso contrário, o lucro será de 30%. 
Faça um algoritmo que receba o valor de compra do produto e ele retorne o valor de venda desse mesmo produto. 
(Opcional, utilizar o INTL para formatar saída).*/

import leia from "readline-sync"

var valor_compra = leia.questionFloat("Informe o valor do produto: ");

if (valor_compra < 20){
console.log("O valor de venda do produto será: R$"+ (valor_compra * 1.45));

}else{
    console.log("O valor de venda do produto será: R$"+ (valor_compra * 1.30));
}
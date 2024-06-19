/*Desenvolva um algoritmo que receba a nota final de um aluno (de 0.0 a 10.0) 
e apresente com base no formato de conceito, nova fórmula de avaliação na que está sendo implantada na educação. 
Segue abaixo a tabela. Além disso, você deve validar se a nota é inválida (menores que 0 e maiores que 10). 
Caso aconteça, você deve informar o usuário;

- Nota >= 90: A
- Nota >= 80: B
- Nota >= 70: C
- Nota >= 60: D
- Nota < 60: F*/

import leia from "readline-sync"

var NOTA = -1
while (NOTA < 0 || NOTA > 10){
    NOTA = leia.questionFloat("INFORME A NOTA (0.0 a 10.0): \n");
    if (NOTA < 0 || NOTA > 10){
        console.log("NOTA INVALIDA");
    }
  }

  var NotaMult = NOTA*  10;

  if(NotaMult >= 90){
console.log("NOTA A");
  }else if(NotaMult >= 80 && NotaMult < 90){
    console.log("NOTA B");
  }else if(NotaMult >= 70 && NotaMult < 80){
    console.log("NOTA C");
  }else if(NotaMult >= 60 && NotaMult < 70){
    console.log("NOTA D");
  }else {
    console.log("NOTA F");
  }
//Crie um loop que peça ao usuário para digitar um número até que ele digite o número 5.
let n = null; //inicializa a variável n com valor nulo
// Loop while para solicitar um número ao usuário
while (n !== 5 ){
n = parseInt(prompt('Digite um número, (caso queira encerrar digite 5)'));
}
//imprime a mensagem de encerramento do programa
console.log(`você digitou o número 5, o programa foi encerrado`);

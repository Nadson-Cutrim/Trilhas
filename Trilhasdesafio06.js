//Crie uma variável chamada nota e atribua um valor entre 0 e 10. Se a nota for maior ou igual a 7, exiba "Aprovado". Se for entre 5 e 6, exiba "Recuperação". Caso contrário, exiba "Reprovado".
let nota = 2; // Altere o valor dessa variável para testar o código
//condição para aprovação
if (nota >= 7){
console.log('Aprovado'); //se a nota for maior ou igual a 7, o aluno está aprovado
}else{
if(nota >= 5){
console.log('Recuperação'); //se a nota for maior ou igual a 5, o aluno está de recuperação

}else{
console.log('Reprovado'); //se a nota for menor que 5, o aluno está reprovado
}
}

// 11. Verificação de Número Positivo ou Negativo
function verificarSinal(numero) {
  if (numero > 0) console.log("Positivo");
  else if (numero < 0) console.log("Negativo");
  else console.log("Zero");
}

// 12. Celsius para Fahrenheit
function converterTemperatura(celsius) {
  return (celsius * 9 / 5) + 32;
}

// 13. While para Somatório 1 até 100
let soma = 0, i = 1;
while (i <= 100) {
  soma += i;
  i++;
}
console.log("Somatório de 1 a 100:", soma);

// 14. Substituir palavra "azul" por "vermelho"
function substituirPalavra(texto) {
  return texto.replace(/azul/g, "vermelho");
}

// 15. Verificar tamanho de string
function verificarTamanho(str) {
  return str.length > 10 ? "Mais de 10 caracteres" : "10 ou menos caracteres";
}

// 16. Array de frutas e imprimir a terceira
const frutas = ["maçã", "banana", "laranja", "uva", "kiwi"];
console.log("Terceira fruta:", frutas[2]);

// 17. Saudação com valor padrão
function saudacao(nome, saudacao = "Bem-vindo(a)") {
  return `${saudacao}, ${nome}!`;
}

// 18. Verificar aprovação
function verificarAprovacao(nota) {
  return nota >= 6 ? "Aprovado" : "Reprovado";
}

// 19. For para contar pares de 0 a 30
for (let i = 0; i <= 30; i++) {
  if (i % 2 === 0) console.log(i);
}

// 20. Contar vogais em uma palavra
function contarVogais(palavra) {
  const vogais = palavra.match(/[aeiou]/gi);
  return vogais ? vogais.length : 0;
}

// 21. Somar todos os elementos de um array
function somarArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

// 22. Dobrar número
function dobrarNumero(n) {
  return n * 2;
}

// 23. While para pares de 2 até 20
let par = 2;
while (par <= 20) {
  console.log(par);
  par += 2;
}

// 24. Capitalizar primeira letra
function capitalizar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 25. Verificação de ano bissexto
function anoBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

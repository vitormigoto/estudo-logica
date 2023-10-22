// Arrays são estrutura de dados que permitem armazenar e manipular uma coleções de valores
// Para se declarar uma Array usamos os colchetes [] 

const minha_array = ["Valor1", "Valor2", "Valor3"]

// As arrays começam suas posições sempre em 0
// Obtemos qualquer valor colocando o indice dele entre colchetes, colocando o indice 0 obtemos o primeiro valor da lista

console.log(minha_array[0])

// Para alterar o valor de um item da lista simplesmente usamos o nome da lista com a posição que desejamos alterar e atribuimos o novo valor 

minha_array[0] = "Novo Valor1"
console.log(minha_array)

// Para retornar o total de itens dentro de uma lista usamos o metodo length

console.log(minha_array.length);

// Para retornar o último elemento da minha lista podemos usar o método length subtraindo 1

console.log(minha_array[minha_array.length - 1])

// Para adicionar um novo valor ao final da minha lista usamos o método push() passando o valor a ser adicionado dentro dos parenteses

minha_array.push("Novo valor Final")
console.log(minha_array)
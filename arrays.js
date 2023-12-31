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

// Para remover um valor do final da minha lista usamos o método pop() e ele irá remover o último elemento da lista

minha_array.pop()
console.log(minha_array)

// Para verificar se um valor existe na nossa lista podemos usar o método includes. Este método vai retornar um valor booleano (verdadeiro ou falso) se o valor existir ou não dentro da nossa lista

console.log(minha_array.includes("Valor2"))

// Para executar uma função especifica por cada item de uma lista usamos o método map
// Este método gera uma nova lista com os novos valores após passar pela função especificada.

const numeros = [1,2,3]
console.log(numeros)
const numeros_dobrados = numeros.map(num => num * 2)
console.log(numeros, numeros_dobrados)

// Para filtrar os numeros de uma lista utilizamos o método filter
// Este método irá passar cada item da lista por uma condição e retornará uma nova lista com os valores filtrados

const outros_numeros = [15,17,54]
const numeros_filtrados = outros_numeros.filter(num => num < 20)
console.log(outros_numeros, numeros_filtrados)

// Para procurar um item a partir de uma condição na array podemos usar o método find
// Ele retorna o primeiro valor encontrado na array a partir de uma condição

console.log(outros_numeros.find(num => num < 20))

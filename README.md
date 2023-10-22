# estudo-logica
Repositório dedicado ao estudo de Lógica de Programação

# Diferença entre Arrays e Listas

Basicamente algumas linguagens tem diferenças entre arrays e listas, apesar de serem estruturas semelhantes, as listas permitem a inclusão e exclusão de itens no meio da estrutura de uma maneira mais flexível que as Arrays. No Javascript não temos estruturas de listas especificas, as listas são como arrays. Enquanto no Phyton temos estruturas de dados de Listas e Arrays separadamente. 

# Arrays

Arrays são estruturas de dados que permitem armazenar e manipular conjunto de valores. É importante saber que para se recuperar um item da lista, usamos sua posição como índice. Toda Array inicia com sua posição em 0.

## Declaração de Arrays em JS

Para se declarar uma nova array em JS usamos os colchetes [ ]:

```jsx
const lista = ["Valor1","Valor2","Valor3"]
```

Para modificar o valor de um item da lista usamos o nome da lista com o indice e igualamos ao seu valor.

```jsx
lista[0] = "Novo Valor"
```

## Métodos que podem auxiliar com Arrays

**Método Length**

Para saber a quantidade de elementos em uma Array posso usar o método length.

```jsx
lista.length // Isso irá retornar o total de itens dentro da Array
```

Para retornar o último elemento de uma lista podemos simplesmente utilizar o método length e subtrarir 1. Fazemos essa subtração porque o início dos indices nas arrays são sempre 0.

```jsx
lista[lista.lenght - 1] // Isso irá retornar o último elemento da minha lista
```

 

**Método Push**

Para adicionar um novo valor ao final da minha lista usamos o método Push

```jsx
lista.push("Valor a ser adicionado no final")
```

**Método Pop**

Para remover o último elemento do final da minha lista usamos o método Pop

```jsx
lista.pop()
```

******************************Método Includes******************************

Para verificar se um valor está incluído dentro da nossa lista podemos usar o método includes. Este método retorna um valor booleano para caso o valor exista ou não na lista.

```jsx
lista.include("Valor2") // Caso o valor exista ele retorna true caso contrario false
```

**Método map**

Este método executa uma função especifica com todos os itens de uma array. Ao final ele retorna uma NOVA lista com os valores alterados pela função.

```jsx
const numeros = [1,2,3]
const numeros_dobrados = numeros.map(num =>  num * 2)
// a Lista numeros dobrados terá os valores [2,4,6] dentro dela
```

**************************Método filter**************************

Este método irá retornar uma nova lista somente com os valores que atenderem uma verificação de uma condição.

```jsx
const numeros = [15,17,54]
const numeros_filtrados = numeros.filter(num => num < 20)
// A lista numeros_filtrados irá trazer apenas os numeros [15,17]
```

**Método find**

Este método retorna o primeiro valor encontrado na array que atende a uma condição

```jsx
const numeros [1,2,3,4,5]
console.log(numeros.find(num => num < 3))
```

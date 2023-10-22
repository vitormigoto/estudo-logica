# estudo-logica
Repositório dedicado ao estudo de Lógica de Programação

# Sumário <a name="0"></a>

1. [Diferença entre Arrays e Listas](#1)
2. [Arrays](#2)
    1. [Declaração de Arrays em JS](#21)
    2. [Métodos que podem auxiliar com Arrays](#22)
        1. [Método Length](#221)
        2. [Método Push](#222)
        3. [Método Pop](#223)
        4. [Método Includes](#224)
        5. [Método map](#225)
        6. [Método filter](#226)
        7. [Método find](#227)
3. [Trees ou Árvores](#3)
    1. [Conceitos Importantes](#31)
        1. [Nós ou Nodes](#311)
        2. [Nó Raiz ou Root Node](#312)
        3. [Nó Pai ou Parent Node](#313)
        4. [Nó Filhos ou Child Nodes](#314)
        5. [Nós Irmãos ou Siblings Nodes](#315)
        6. [Nós Folhas ou Leaf Nodes](#316)
        7. [Profundidade (Depth) e Altura (Height)](#317)
        8. [Árvore Binária](#318)
        9. [Árvore Não-Binária](#319)

# Diferença entre Arrays e Listas <a name="1"></a> - [(Topo)](#0)

Basicamente algumas linguagens tem diferenças entre arrays e listas, apesar de serem estruturas semelhantes, as listas permitem a inclusão e exclusão de itens no meio da estrutura de uma maneira mais flexível que as Arrays. No Javascript não temos estruturas de listas especificas, as listas são como arrays. Enquanto no Phyton temos estruturas de dados de Listas e Arrays separadamente. 

# Arrays<a name="2"></a> - [(Topo)](#0)

Arrays são estruturas de dados que permitem armazenar e manipular conjunto de valores. É importante saber que para se recuperar um item da lista, usamos sua posição como índice. Toda Array inicia com sua posição em 0.

## Declaração de Arrays em JS<a name="21"></a> - [(Topo)](#0)

Para se declarar uma nova array em JS usamos os colchetes [ ]:

```jsx
const lista = ["Valor1","Valor2","Valor3"]
```

Para modificar o valor de um item da lista usamos o nome da lista com o indice e igualamos ao seu valor.

```jsx
lista[0] = "Novo Valor"
```

## Métodos que podem auxiliar com Arrays<a name="22"></a> - [(Topo)](#0)

**Método Length**<a name="221"></a> - [(Topo)](#0)

Para saber a quantidade de elementos em uma Array posso usar o método length.

```jsx
lista.length // Isso irá retornar o total de itens dentro da Array
```

Para retornar o último elemento de uma lista podemos simplesmente utilizar o método length e subtrarir 1. Fazemos essa subtração porque o início dos indices nas arrays são sempre 0.

```jsx
lista[lista.lenght - 1] // Isso irá retornar o último elemento da minha lista
```

 

**Método Push**<a name="222"></a> - [(Topo)](#0)

Para adicionar um novo valor ao final da minha lista usamos o método Push

```jsx
lista.push("Valor a ser adicionado no final")
```

**Método Pop**<a name="223"></a> - [(Topo)](#0)

Para remover o último elemento do final da minha lista usamos o método Pop

```jsx
lista.pop()
```

**Método Includes**<a name="224"></a> - [(Topo)](#0)

Para verificar se um valor está incluído dentro da nossa lista podemos usar o método includes. Este método retorna um valor booleano para caso o valor exista ou não na lista.

```jsx
lista.include("Valor2") // Caso o valor exista ele retorna true caso contrario false
```

**Método map**<a name="225"></a> - [(Topo)](#0)

Este método executa uma função especifica com todos os itens de uma array. Ao final ele retorna uma NOVA lista com os valores alterados pela função.

```jsx
const numeros = [1,2,3]
const numeros_dobrados = numeros.map(num =>  num * 2)
// a Lista numeros dobrados terá os valores [2,4,6] dentro dela
```

**Método filter**<a name="226"></a> - [(Topo)](#0)

Este método irá retornar uma nova lista somente com os valores que atenderem uma verificação de uma condição.

```jsx
const numeros = [15,17,54]
const numeros_filtrados = numeros.filter(num => num < 20)
// A lista numeros_filtrados irá trazer apenas os numeros [15,17]
```

**Método find**<a name="227"></a> - [(Topo)](#0)

Este método retorna o primeiro valor encontrado na array que atende a uma condição

```jsx
const numeros [1,2,3,4,5]
console.log(numeros.find(num => num < 3))
```

# Trees ou Árvores<a name="3"></a> - [(Topo)](#0)

Árvores são estrutura de dados hierárquicas e servem para modelar e resolver problemas computacionais complexos. 

> Elas são nós conectados por linhas onde cada nó tem 0 ou mais nós filhos
> 

![Exemplo de Árvore onde cada ponto é um nó e cada seta uma linha](img/B-tree-definition.png)

Exemplo de Árvore onde cada ponto é um nó e cada seta uma linha

## **Conceitos Importantes**<a name="31"></a> - [(Topo)](#0)

Abaixo vamos entender alguns conceitos importantes sobre árvores.

**Nós ou Nodes**<a name="311"></a> - [(Topo)](#0)

Cada elemento de uma árvore é chamado de Nó. Cada nó pode conter dados/informações e referências para seus nós filhos

**Nó Raiz ou Root Node**<a name="312"></a> - [(Topo)](#0)

O nó superior na hierarquia é chamado de nó raiz. O Nó Raiz não possui um nó pai.

**Nó Pai ou Parent Node**<a name="313"></a> - [(Topo)](#0)

Cada nó que possui um ou mais nós filhos é chamado de nó pai. Cada nó pai está diretamente posicionado acima dos seus nós filhos na hierarquia da árvore.

**Nó Filhos ou Child Nodes**<a name="314"></a> - [(Topo)](#0)

Os nós conectados abaixo de um nó superior são chamados de Nós filhos. Cada nó pai pode ter vários Nós filhos. 

**Nós Irmãos ou Siblings Nodes**<a name="315"></a> - [(Topo)](#0)

Nós filhos do mesmo nó pai são chamados de nós irmãos. Eles compartilham o mesmo nó pai.

**Nós Folhas ou Leaf Nodes**<a name="316"></a> - [(Topo)](#0)

Os nós que não possuem nós filhos são chamados de Leaf Nodes. Estes nós são os nós terminais da árvore.

**Profundidade (Depth) e Altura (Height)**<a name="317"></a> - [(Topo)](#0)

A profundidade de um nó é o número de conexões do caminho do nó raiz até este nó. O nó raiz tem profundidade 0.

A altura de um nó é a distancia máxima entre esse nó e uma de suas folhas. A altura da árvore é a altura do nó raiz.

**Árvore Binária**<a name="318"></a> - [(Topo)](#0)

Uma árvore Binária é um tipo de árvore onde cada nó pai possui no máximo dois nós filhos, um a esquerda e outro a direita.

**Árvore Não-Binária**<a name="319"></a> - [(Topo)](#0)

Na árvore não binária cada nó pai pode ter mais de dois filhos em cada nó.
//AULA 123 PROTOTYPE

/* 
    Prototype

    * prototytpe-based lenguage
    * prototype chain
    * ___proto__
*/ 

//AULA 124 TYPE CONVERSION COERSION

/* 
    Type Conversion (typecasting) vs type coersion

    *alteração de um tipo de dado para outro

*/
     console.log('9' + 5)

//AULA 125 strings em números.

//MANIPULANDO STRINGS E NÚMEROS

// TRANSFORMAR STRING EM NÚMERO E NÚMERO EM STRING

// let string = '123'
// console.log(Number(string))
// let number = 321
// console.log(String(number))

//AULA 126 CONTAR QUANTOS CARACTERES TEM UMA PALAVRA E QUAINTOS DÍGITOS TEM UM NÚMERO

// let word = 'paralelepipedo'
// console.log(word.length)
// let number = 1234
// console.log(String(number).length)

//AULA 127 CASAS DECIMAIS

// TRANSFORMAR UM NÚMERO QUEBRADO COM 2 CASAS DECIMAIS E TROCAR PONTO POR VÍRGULA.

// let number = 28392.0209390293
// console.log(number.toFixed(3).replace(".", ","))

//AULA 128 TRANSFORME LETRAS MINÚSCULAS EM MAIÚSCULAS. FAÇA O CONTRÁRIO DISSO TAMBÉM.

// let word = 'programar é top'

// console.log(word.toUpperCase())

//AULA 129 

// SEPARE UM TEXTO QUE CONTÉM ESPAÇOS, EM UM NOVO ARRAY ONDE CADA TEXTO É UMA POSIÇÃO DO ARRAY.
//DEPOIS DISSO, TRANSFORMA O ARRAY EM UM TEXTO E ONDE ERAM ESPAÇOS, COLOQUE _

// let textinho = "eu quero um emprego!"
// let myArray = textinho.split(" ")
// let textinhoWithUnderscore = myArray.join("_")
// console.log(textinhoWithUnderscore.toUpperCase())

//AULA 130 VERIFICAR SE O TEXTO CONTÉM A PALAVRA AMOR
//includes verifica se está maiúsculo ou minúsculo

// let phrase = "Eu quero viver o Amor!"
// console.log(phrase.includes("Amor"))

//PAREI NA AULA 132 CRIARNDO UM ARRAY COM CONSTRUCTOR

// let MyArray = new Array('a', 'b', 'c')
// console.log(MyArray)

//AULA 133 COMO CONTAR ELEMENTOS DE UM ARRAY

// console.log(['a', 'b', 'c'])

// AULA 134 TRANSFORMANDO UMA CADEIA DE CARACTERES EM ELEMENTOS DE UM ARRAY

// let word = 'manipulação'
// console.log(Array.from(word))


//AULA 135 MANIPULANDO ARRAYS

let techs = ['html', 'css', 'js']

//adicionar um item no fim
// techs.push('nodejs')
//adicionar no começo
// techs.unshift('C#')
//remover do fim
// techs.pop()
//remover do começo
// techs.shift()
//pegar somente alguns elementos do array
// console.log(techs.slice(1, 3))
//remover 1 ou mais items em qualquer posição do array
// techs.splice(1, 2)
//encontrar a posição de um elemento no array
let index = techs.indexOf('css')
console.log(index)





//da apra criar uma função a partir de uma var, é uma func anônima, já que n tem nome.

//parametros da função são o 'number1' e 'number2'
const sum = function( number1, number2) {
    total = number1 + number2
    return total
}


let number1 = 34
let number2 = 25
sum(number1, number2) // aqui nessa função sum são os argumentos

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é: ${sum(number1, number2)}`)

//aula 117.

// Função é um liquidificador
// Fruta 1 e 2 são os parâmetros, na const 'copo' são passados os argumentos.


function fazerSuco (fruta1, fruta2) {
    return fruta1 + fruta2
}

const copo = fazerSuco ("banana", "maçã")

console.log(copo)

//AULA 118 FUNCTION SCOPE

let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject))

//AULA 119 FUNCTION HOISTING

// SayMyName();

// function SayMyName() {
//     console.log('Luis')
// }

//AULA 120 ARROW FUNCTION

const SayYourName = () => {
    console.log('Luis')
} 

SayYourName();

//AULA 121 callback function
//callback é uma função que passa valor a outra. Ou seja, chamar uma função e depois outra de volta

// function SayMyName(name) {
//     console.log('antes de executar a função callback')
//     name()

//     console.log('depois de executar o callback')
// }
// SayMyName(
//     () => {
//         console.log('Estou em uma callback')
//     }
//)

//AULA 122 FUNÇÕES CONSTRUTORAS

/* 
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword

*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + "está andando"
    }
}
const Luis = new Person("Luis")
const Jane = new Person('Jane')
console.log(Jane.walk)
console.log(Luis.walk)
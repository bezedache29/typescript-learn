console.log('alo')

// Variables
let num1 = 24
let num2:number
let num3:string
let numOrString: number | string

// Array
let array = ['bannane', 'fraise', 'poire', 'orange']
array[1] = 'cheval'
let arr: number[] = []
let tableau: (number | boolean)[] = []
let tab:any[] = []

tableau.push(false)
tableau.push(24)

tab.push(false)
tab.push(12)
tab.push('salut')
tab.push(tableau)

console.log(tab)

// Objets
interface Player {
  id: number,
  name: string,
  jersey?: number
}

let zidane:Player = {
  id: 0,
  name: 'Zidane',
}

// Class
class Singer {
  id: number
  name: string
  alive?: boolean

  constructor(id: number, name:string, alive?:boolean) {
    this.id = id,
    this.name = name,
    this.alive = alive
  }
}

const prince = new Singer(0, 'Prince')

console.log(prince)

// Fonctions
const sayMyName = (name:string = 'Jojo'):void => {
  console.log(`Bonjour ${name}`)
}

sayMyName()
sayMyName('Ripley')

const ageDuCapitaine = (age:number|string, size?:number):void => {
  if (!size) {
    console.log(`l'age du capitaine est de ${age} ans`)
  } else {
    console.log(`le capitaine mesure ${size} m, et a ${age} ans`)
  }
}

ageDuCapitaine(42)
ageDuCapitaine(42, 1.75)

const addition = (a:number, b:number):number => {
  return a + b
}

console.log(addition(1, 2))

// Enum & Tuple
enum Role {ADMIN, PREMIUM, BASIC} // Enum

interface User {
  name:string
  attr: [number, string | boolean] // Tuple
  role: Role
}

const user1:User = {
  name: 'Ripley',
  attr: [37, 'Homme'],
  role: Role.ADMIN
}

const user2:User = {
  name: 'Tophe',
  attr: [24, true],
  role: Role.BASIC
}

console.log(user1)
console.log(user2)
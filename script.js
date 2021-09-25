"use strict";
console.log('alo');
// Variables
let num1 = 24;
let num2;
let num3;
let numOrString;
// Array
let array = ['bannane', 'fraise', 'poire', 'orange'];
array[1] = 'cheval';
let arr = [];
let tableau = [];
let tab = [];
tableau.push(false);
tableau.push(24);
tab.push(false);
tab.push(12);
tab.push('salut');
tab.push(tableau);
console.log(tab);
let zidane = {
    id: 0,
    name: 'Zidane',
};
// Class
class Singer {
    constructor(id, name, alive) {
        this.id = id,
            this.name = name,
            this.alive = alive;
    }
}
const prince = new Singer(0, 'Prince');
console.log(prince);
// Fonctions
const sayMyName = (name = 'Jojo') => {
    console.log(`Bonjour ${name}`);
};
sayMyName();
sayMyName('Ripley');
const ageDuCapitaine = (age, size) => {
    if (!size) {
        console.log(`l'age du capitaine est de ${age} ans`);
    }
    else {
        console.log(`le capitaine mesure ${size} m, et a ${age} ans`);
    }
};
ageDuCapitaine(42);
ageDuCapitaine(42, 1.75);
const addition = (a, b) => {
    return a + b;
};
console.log(addition(1, 2));
// Enum & Tuple
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["PREMIUM"] = 1] = "PREMIUM";
    Role[Role["BASIC"] = 2] = "BASIC";
})(Role || (Role = {})); // Enum
const user1 = {
    name: 'Ripley',
    attr: [37, 'Homme'],
    role: Role.ADMIN
};
const user2 = {
    name: 'Tophe',
    attr: [24, true],
    role: Role.BASIC
};
console.log(user1);
console.log(user2);

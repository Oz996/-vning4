// arrays lista med ett eller flera värden. vi vill hålla samma datatyp inuti en array
// const array = [0,1,2,3,4,5,6,7,8,9,]

// gör inte såhär
// const multiArray = ["12",12,true]

// det här är också samma
// i det här falconst är datatypen object, objekten i sig kan innehålla flera datatyper, men man vill hålla dem strukturerade likadant
const users = [
{fistName : "Öz", lastName: "Guv", age :26, weight: 67},
{fistName : "erik", lastName: "eriksson", age :21, weight: 78},
{fistName : "lars", lastName: "larsson", age :29, weight: 91},
]

const names = ["Öz", "erik","lars"];
names [3] = "nisse"
names [4] = "john"
//console.log(users)


// unshift för att lägga till i början
// shift för att ta bort i början
// push för att lägga till i slutet



//funktioner



console.log (funk1())

function funk1() {  // Hoisting - hissas till toppen
    let sum = 3 + 5
    return sum
}

const funk2 = function(){ // Den här typen av funktion (när vi använder const) Hoistas inte
    let sum = 3 + 5
    return sum
}
console.log (funk2())

const fullName = function(firstName, lastName){
    if(firstName !== " " && lastName !== "") {
        return firstName + " "+ lastName

    }
}
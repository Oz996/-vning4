const persons = [
    { firstName: "Joakim", lastName: "Wahlström", age: 35},
    { firstName: "Jeanette", lastName: "Wahlström", age: 31},
    { firstName: "Hans", lastName: "Wahlström", age: 33},
    { firstName: "Tommy", lastName: "Wahlström", age: 32},
    { firstName: "Tony", lastName: "Wahlström", age: 30}

]



//FOR - Loopa ett visst antal gånger
//FOR OF - Loopa igenom en hel array

for (let i=0; i< persons.length; i++) {

    console.log(i)

    console.log(persons[i].firstName)
}


for (let person of persons) {
    console.log (person) 
}

//FOR EACH

persons.forEach(person => {
    console.log(person.lastName)

})

// WHILE & DO WHILE 

let i = 0

while (i<10) {
    i++
}

do {

i++
} while (i<11)


let nr = 10




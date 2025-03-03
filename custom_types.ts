// Challenge: finish the object type definition
type Address = {
     
    street: string
    city: string
    country: string
}

type Person = {
    name: string;
    age: number;
    isStudent: boolean;
    address?: Address; // address is now optional
}

let person1: Person;

person1 = {
    name: "joe",
    age: 42,
    isStudent: true,
    address: {
        street: "123 main",
        city: "florence",
        country: "italy",
    }
}

let person2: Person;

person2 = {
    name: "rick",
    age: 49,
    isStudent: false,
} 

function displayInfo(person) {
    console.log(`${person.name} lives at ${person.address?.street}`)
}

// the (?) in linking chain just disables the squiggle

// es: rick lives at undefined

displayInfo(person2)

// person1 = {
//     name: "joe",
//     age: 42,
//     isStudent: true,
// }

// let person1 = {
//     name: "Joe",
//     age: 42,
//     isStudent: true
// }

// let person2 = {
//     name: "Jill",
//     age: 66,
//     isstudent: false
// }
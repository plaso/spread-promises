
const student = {
  age: 20,
  name: 'Pepe',
  id: 1,
  bio: 'lorem ipsum',
  address: {
    street: 'Calle Desengaño',
    number: '21',
    city: 'Madrid'
  }
}

function logStudent(
  {
    age,
    id,
    name,
    address: { street, number, city }
  }
) {
  console.log({ id })
  console.log({ name })
  console.log({ address: `${name} lives in ${street} ${number}, ${city}` })
}

logStudent(student)


const podium = ['Sainz', 'Checo', 'Hamilton']

const [winner, second, third, fourth] = podium

console.log({ winner })
console.log({ second })
console.log({ third })
console.log({ fourth })

const losers = ['Alonso', 'Verstappen']

const copy = [...losers, ...podium]

console.log(copy);

const condition = false

const additionalProperties = {
  email: 'email@email.com',
  // ...(condition ? { age: 40 } : {}) Equivalente a lo de abajo
  ...(condition && { age: 40 })
}

// if (condition) {
//   additionalProperties.age = 40
// } else {
//   additionalProperties.foo = 'foo'
// }

const studentCopy = { ...student, ...additionalProperties }

console.log(studentCopy);

// console.log(condition && 'hola')

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]

const join = [
  ...array1,
  // ...(condition ? array2 : [])
  ...(condition ? [...array2] : [])
]

const [firstPosition, ...patata] = join

console.log({firstPosition, patata})

const obj = { name: 'sdasd', age: 20, email: 'email@email.com' }

const { name, age, email, ...rest } = obj

console.log({ name, age, rest });
const cars = ['Мерседес', 'БНВ', 'Мазда', 'Опель']
const fib = [1, 1, 2, 3, 5, 8, 13]
// const people = [
// 	{name: 'Аюп', budget: 1000000},
// 	{name: 'Луиза', budget: 5000000000},
// 	{name: 'Иван', budget: 300}
// ]

// Function
function addItemToEnd() {

}

// Method
// cars.push('Рено')
// cars.unshift('Волга')

// const firstCar = cars.shift()
// const lastCar = cars.pop()
// console.log(firstCar)
// console.log(lastCar)
// console.log(cars)

// console.log(cars.reverse())
// console.log(cars)

// const index = cars.indexOf('БНВ')
// cars[index] = 'Порше'
// console.log(cars)

// let findedPerson 
// for (const person of people) {
// 	if (person.budget === 300) {
// 		findedPerson = person
// 	}
// }
// console.log(findedPerson)

// const index = people.findIndex((person) => person.budget === 300)
// console.log(index)
// const person = people.find(person => person.budget === 300)
// console.log(person)

// console.log(cars.includes('Мазда'))

// const upperCaseCars = cars.map(car => {
	// return car.toUpperCase()
// })

// console.log(upperCaseCars)
// console.log(cars)

const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// console.log(pow2Fib)
// const pow2Fib = fib.map(pow2)
// const filtered = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib)
// console.log(filtered)


// Задача 1 Перевернуть строку
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

const people = [
	{name: 'Аюп', budget: 7000},
	{name: 'Луиза', budget: 500000},
	{name: 'Иван', budget: 300}
]

const allBudget = people
	.filter(person => person.budget > 2000)
	.reduce((acc, person) => {
		acc += person.budget
	return acc
}, 0)

console.log(allBudget)
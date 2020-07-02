const cars = ['Мерседес', 'БНВ', 'Мазда', 'Опель']
const people = [
	{name: 'Аюп', budget: 1000000},
	{name: 'Луиза', budget: 5000000000},
	{name: 'Иван', budget: 300}
]

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

let findedPerson 
for (const person of people) {
	console.log(person)
	if (person.budget === 300) {
		findedPerson = person
	}
}
console.log(findedPerson)

// const index = people.findIndex((person) => person.budget === 300)
// console.log(index)
// const person = people.find((person) => person.budget === 300)
// console.log(person)


// Задача 1 Перевернуть строку
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)
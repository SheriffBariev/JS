const person = {
	name: 'Аюп',
	age: 27,
	isProgrammer: true,
	languages: ['ru', 'en', 'de'],
	// 'complex key': 'Complex Value',
	// ['key_' + (1 + 3)] : 'Computed Key', //key_4
	//method
	greet() {
		console.log('greet form person')
	}
}

// console.log(person.name)
// console.log(person['age'])
// console.log(person['complex key'])
// person.greet()

// person.age++
// person.languages.push('by')
// // person['key_4'] = undefined
// delete person['key_4']

// console.log(person)
// console.log(person['key_4'])

// const {name, age: personAge = 10, languages} = person
// console.log(name, personAge, languages)

// Чем опасен цикл For in?
// Дело в том, что цикл for in он итерируется не только по ключам самого объекта
// но он также может заходить в этот прототип(proto)
// for (let key in person ) {
// 	if (person.hasOwnProperty(key)) { //добавили условие чтобы цикл не переше на ключ proto
// 		console.log('key: ', key)
// 		console.log('values: ', person[key])
// 	}
// }

/*
* object keys возвращает массив и сразу у него можем вызват foreach, и он не проходится по proto
*/
// Object.keys(person).forEach((key) => {
// 	console.log('key: ', key)
// 	console.log('values: ', person[key])
// })
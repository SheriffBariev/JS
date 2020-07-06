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
	},
	info() {
		console.log('this: ', this)
		console.info('Информация про человека по имени:', this.name)
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
// 	if (person.hasOwnProperty(key)) { //добавили условие чтобы цикл не перешел на ключ proto
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

// Context
// person.info()

//создать свой консоль лог 
const logger = {
	keys(obj) {
		console.log('Object Keys: ', Object.keys(this))
	},

	keysAndValues() {
		//Стрелочные функции не создают свой собственный контекст, когда function строка 69 создает свой контекст
		// key: value
		// Object.keys(this).forEach(key => {
		// 	console.log(`"${key}": ${this[key]}`)
		// })

		// const self = this
		Object.keys(this).forEach(function(key) {
		 	console.log(`"${key}": ${this[key]}`)
		}.bind(this))
	},

	withParams(top = false, between = false, bottom = false) {
		if(top) {
			console.log('------ Start ------')
		}
		Object.keys(this).forEach((key, index, array) => {
			console.log(`"${key}": ${this[key]}`)
			if(between && index !== array.length - 1) {
				console.log('----------------')
			}
		})

		if(bottom) {
			console.log('------ End ------')
		}
	}
}

// const bound = logger.keys.bind(person)
// bound()

// logger.keys.call(person)

// logger.keysAndValues.call({a: 1, c: {b: 2}})
// logger.keysAndValues.call(person)

// logger.withParams.call(person, true, true, true)// первым параметром передается контекст, далее параметры метода withParams.
logger.withParams.apply(person, [true, true, true])// метод apply принимает 2 параметра
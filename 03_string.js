// const name = 'Аюп'
// const age = 27


// const output = 'Привет, меня зовут ' + name + ' и мой возраст: ' + age + ' лет.';
// const output = `Привет, меня зовут ${name} и мой возраст: ${age < 20 ? 'A' : 'B'} лет.`;
// console.log(output)

// const output = `
// 	<div>This is div</div>
// 	<p>this is p</p>
// `

// console.log(output)

// const name = 'Владилен'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('!'))
// console.log(name.toLowerCase().startsWith('влад'))
// console.log(name.startsWith('Влад'))
// console.log(name.endsWith('лент'))
// console.log(name.repeat(3))
// const space = '         pasword     '
// console.log(space.trim())
// console.log(space.trimLeft())
// console.log(space.trimRight())

function logPerson(s, name, age) {
	if (age < 0) {
		age = 'Еще не родился'
	}
	return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Аюп'
const personAge = 27
const personName2 = 'Максим'
const personAge2 = -3

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`

console.log(output)
console.log(output2)
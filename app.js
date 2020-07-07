// программа которая вычисляет сколько секунд осталось до завтра.
// const now = new Date();

// const secInDay = 24 * 60 * 60;

// const hrs = now.getHours();
// const mins = now.getMinutes();
// const sec = now.getSeconds();

// const secPass = (hrs * 3600) + (mins * 60) + sec;

// console.log(secInDay - secPass)
//__________________________________________________________________

// console.log(Date.now()) // --время в миллисекундах 

// программа, вычисляющая сумму квадратов всех чисел от 1 до 100 000. 
// Измерить время работы этой программы.
// const start = Date.now()
// let sum = 0;
// for (let i = 1; i <= 1000000; i++) {
// 	sum += Math.pow(i, 2);
// }
// console.log(sum)
// const end = Date.now()
// console.log(end - start)
// ________________________________________________________________
// Форматирование даты
// const input = prompt('DD MM YYYY');
// const [day, month, year] = input.split(' ');

// const inputDate = new Date(`${year}-${month}-${day}`)

// let diff = Date.now() - inputDate;

// diff = diff / 1000 / 60 / 60;

// console.log(diff.toFixed(0));

// _________________________________________________________________
// Написать функцию formatDate, которая будет выводить полученный 
// на вход объект Date в виде строки в формате dd.mm.yyyy hh:mm
// function formatDate(date) {
// 	let day = makeTwoDigit(date.getDate());
// 	let month = makeTwoDigit(date.getMonth() + 1);
// 	let year = makeTwoDigit(date.getFullYear());
// 	let hours = makeTwoDigit(date.getHours());
// 	let minutes = makeTwoDigit(date.getMinutes());
// 	return `${day}.${month}.${year} ${hours}:${minutes}`
// }

// function makeTwoDigit(value) {
// 	let newValue = value;
// 	if (value < 10) {
// 		newValue = '0' + value
// 	}

// 	return newValue;
// }

// const date = new Date('2007-06-02T05:15');
// console.log(formatDate(date))

// ______________________________________________________________
// программа запрашивает ФИ в два слова. Проверить введенные данные,
// и если формат неправильный - выбросить ошибку
// try {
// 	const input = prompt("Enter you name");

// 	const inputArr = input.split(' ');
// 	if (inputArr.length != 2) {
// 		throw new Error('Invalid input');
// 	}
// } catch (err) {
// 	alert(err.message);
// }

// console.log('+');

// ______________________________________________________________

// Программа, которая генерирует уравнение вида ax = b со 
// случайными коэффициентами. Запросить у пользователя ввод решения
// уравнения, округленного в меньшую сторону. Проверить правильность
// ответа.

// function generateCoef(min, max) {
// 	const coef = Math.random() * (max - min) + min;

// 	return Math.floor(coef);
// }

// const a = generateCoef(2, 20);
// const b = generateCoef(2, 20);

// const input = prompt(`${a}x = ${b}. x = ?`);

// const res = Math.floor(b/a);

// if (input == res) {
// 	alert('Right');
// } else {
// 	alert('Wrong');
// }
// ______________________________________________________________
 

//	РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ https://regex101.com
// const email = prompt('Enter email');
// const regexp = /[a-zA-Z_\.0-9]+@[a-z0-9]+\.[a-z]{2,5}/;

// if (regexp.test(email)) {
// 	console.log('valid email');
// } else {
// 	alert('Invalid email');
// }

// _________________________________________________________________
// КУки
// document.cookie = 'token=QASZ; max-age=10';
// console.log(document.cookie);

// При первом входе пользователя на сайт запросить его имя. 
// При каждом следующем входе - 
// приветствовать его по имени с помощью браузерного оповещения
// JSON

// localStorage.clear() // очистка localstorage

// const jsonObj = localStorage.getItem('user')

// if (jsonObj) {
// 	const obj = JSON.parse(jsonObj);
// 	alert(`Hello ${obj.name}`);
// } else {
// 	const input = prompt('Enter your name');

// 	const obj = {
// 		name: input
// 	}
// 	//превращаем объект в json
// 	const jsonObj = JSON.stringify(obj);

// 	localStorage.setItem('user', jsonObj);

// }


//__________________________________________________________________
// fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
// .then((res) => {
// 	return res.json();
// })
// .then((data) => {
// 	console.log(data);
// })

// var n = 17;
// binary_string = n.toString(2); // Вернет "10001"
// octal_string = "0" + n.toString(8); // Вернет "021"
// hex_string = "0x" + n.toString(16); // Вернет "0x11"
// _________________________________________________________________

// var n = 123456.789;
// console.log(typeof n.toFixed(0)); // "123457"
// console.log(n.toFixed(2)); // "123456.79"
// console.log(n.toExponential(1)); // "1.2e+5"
// console.log(n.toExponential(3)); // "1.235e+5"
// console.log(n.toPrecision(4)); // "1.235e+5"
// console.log(n.toPrecision(7)); // "123456.8"
// _______________________________________________________________

// console.log(parseInt("3 слепых мышки")); // Вернет 3
// console.log(parseFloat("3.14 метров")); // Вернет 3.14
// console.log(typeof parseInt("12.34")); // Вернет 12
// console.log(parseInt("0xFF")); // Вернет 255
// __________________________________________________________________

// В качестве второго аргумента функция parseInt() может принимать основание
// системы счисления. Корректными значениями являются числа в диапазоне от 2
// до 36, например:
console.log('parseInt("11", 2) – Вернет 3 (1*2 + 1):', parseInt("11", 2)); // Вернет 3 (1*2 + 1)
console.log('parseInt("ff", 16) – Вернет 255 (15*16 + 15)', parseInt("ff", 16)); // 
console.log('parseInt("zz", 36) – Вернет 1295 (35*36 + 35)', parseInt("zz", 36)); // 
console.log('parseInt("077", 8) – Вернет 63 (7*8 + 7)', parseInt("077", 8)); // 
console.log('parseInt("077", 10) – Вернет 77 (7*10 + 7)', parseInt("077", 10));// 

console.log('parseInt("eleven") – Вернет NaN', parseInt("eleven"));// 
console.log('parseFloat("$72.47") – Вернет NaN', parseFloat("$72.47"));// 
console.log('5' === 5)

x = 0;
console.log(typeof x);
let x_as_boolean = !!x; // -- преобразование в Boolean
console.log(typeof x_as_boolean)
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

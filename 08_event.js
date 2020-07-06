// window.alert('1')
// window.prompt('Как тебя зовут?')
// window.setInterval

const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0] - этим методом лучше не пользоваться – устарел
// const heading2 = document.getElementsByClassName('h2-class') - тоже устаревший метод
// const heading2 = document.querySelector('#sub-hello') // — Всегда возвращает первый элемент. Современный метод.
// console.log(heading2)

const heading2 = document.querySelector('h2')
console.dir(heading2)

const heading3 = heading2.nextElementSibling
// console.log(heading3)

// const h2List = document.querySelectorAll('h2')
// console.log(h2List)

// console.dir(heading.textContent)

setTimeout( () => {
	addStylesTo(heading, 'JavaScript')
}, 2500)

setTimeout( () => {
	addStylesTo(heading2, 'Практикуйся', 'green')
}, 3000)

const link = heading3.querySelector('a')

link.addEventListener('click', () => {
	event.preventDefault()
	console.log('Click onclick', )
	const url = event.target.getAttribute('href')

	window.location = url
})

setTimeout( () => {
	addStylesTo(heading3.children[0], 'И все получится', 'blue', '2rem')
}, 4500)

function addStylesTo(node, text, color = 'red', fontSize) {
	node.textContent = text
	node.style.color = color
	node.style.textAlign = 'center'
	node.style.backgroundColor = 'black'
	node.style.padding = '2rem'
	node.style.display = 'block'
	node.style.width = '100%'
	// falsy: '', undefined, null, 0, false
	if (fontSize) {
		node.style.fontSize = fontSize
	}
}

// https://developer.mozilla.org/ru/docs/Web/Events
// 1 способ
heading.onclick = () => {
	if (heading.style.color === 'red') {
		heading.style.color = '#000'
		heading.style.backgroundColor = '#fff'
	} else {
		heading.style.color = 'red'
		heading.style.backgroundColor = '#000'
	}
}

// 2 способ 
heading2.addEventListener('dblclick', () => {
	if (heading2.style.color === 'yellow') {
		heading2.style.color = '#000'
		heading2.style.backgroundColor = '#fff'
	} else {
		heading2.style.color = 'yellow	'
		heading2.style.backgroundColor = '#000'
	}
})


// event error

const log = document.querySelector('.event-log-contents');

const badImg = document.querySelector('.bad-img');
badImg.addEventListener('error', (event) => {
    log.textContent = log.textContent + `${event.type}: Loading image\n`;
    console.log(event)
});

const imgError = document.querySelector('#img-error');
imgError.addEventListener('click', () => {
    badImg.setAttribute('src', 'i-dont-exist');
});
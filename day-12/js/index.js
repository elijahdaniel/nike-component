const shoe = document.querySelector('#shoe')
const redBtn = document.querySelector('#red-dot')
const greenBtn = document.querySelector('#green-dot')
const purpleBtn = document.querySelector('#purple-dot')

redBtn.addEventListener('click', () => {
	shoe.setAttribute('src', 'images/shoe-red.png')
})

greenBtn.addEventListener('click', () => {
	shoe.setAttribute('src', 'images/shoe-green.png')
})

purpleBtn.addEventListener('click', () => {
	shoe.setAttribute('src', 'images/shoe-purple.png')
})

AOS.init()

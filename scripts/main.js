const button = document.querySelector('#burger')
const burgerMenu = document.querySelector('#burger-menu')

button.addEventListener('click', () => {
  button.classList.toggle('--clicked')
  burgerMenu.classList.toggle('--opened')
})

const burgerLinks = Array.from(document.querySelectorAll('.burger-menu__link'))
burgerLinks.forEach(link => {
  link.addEventListener('click', () => {
    button.classList.remove('--clicked')
    burgerMenu.classList.remove('--opened')
  })
})


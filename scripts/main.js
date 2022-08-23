const button = document.querySelector('#burger')
const burgerMenu = document.querySelector('#burger-menu')

button.addEventListener('click', () => {
  button.classList.toggle('--clicked')
  burgerMenu.classList.toggle('--opened')
})
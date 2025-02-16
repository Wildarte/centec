const btn_open_menu =  document.getElementById('btn_open_menu');
const btn_close_menu = document.getElementById('btn_close_menu');
const nav_menu = document.querySelector('nav.menu')

btn_open_menu.addEventListener('click', () => {
    nav_menu.classList.add('open_nav_menu')
})

btn_close_menu.addEventListener('click', () => {
    nav_menu.classList.remove('open_nav_menu')
})
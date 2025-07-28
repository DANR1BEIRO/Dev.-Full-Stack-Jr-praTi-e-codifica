document.addEventListener('DOMContentLoaded', () => {
    const navtoggle = document.getElementById('navToggle')
    const navMenu = document.getElementById('navMenu')
    navtoggle.addEventListener('click', () => {
        navMenu.classList.toggle('open')
    })
})
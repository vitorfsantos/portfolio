const btnMobile = document.getElementById('btn-mobile')
const click_link = document.getElementsByName('a')
const nav = document.querySelector('nav');
const links = document.querySelectorAll('li a');


function toggleMenu(){
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)


links.forEach(item => {
    item.addEventListener('click', (event) => {
    nav.classList.toggle('active');
    })
  })

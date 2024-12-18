const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')


const modeLocal = localStorage.getItem('mode');

function darkLight() {
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
    body.classList.toggle('dark-mode')
}

if(modeLocal) {
    darkLight()
} 
darkBtn.addEventListener('click', ()=> {
    darkLight()
    localStorage.setItem('mode', 'darkmode')
})

lightBtn.addEventListener('click', ()=> {
    darkLight()
    localStorage.setItem('mode', '')
})

// Kalau String Langsung APPEND
document.titile = 'Belajar DOM JS';
const body = document.body

// body.append('Hello World')

const btn1 = document.getElementById('btn-1')
const btn2 = document.querySelector('.btn-2')

btn1.style.border = 'none'
btn1.style.backgroundColor = 'tomato'
btn1.style.fontSize = '25px'
btn1.style.padding = '23px'
btn1.style.borderRadius = '6px'



const br = document.createElement('br')
// Kalo element harus buat variable
const h1 = document.createElement('h1') //<h1></h1>
h1.textContent = 'Anjat ini H1 bro' // <h1>Anjay ini h1 BRO</h1>


const namaSaya = document.createElement('p')
namaSaya.innerHTML = '<marquee>Alavie Farghanie</marquee'

body.append(h1)
body.append(namaSaya)
body.append(br)
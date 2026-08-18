const hr = document.querySelector('.hour')
const min = document.querySelector('.minute')
const sec = document.querySelector('.second')
const amPm = document.querySelector('.am-pm')
const toggle = document.querySelector('.toggle')

let mode = '24' // default

// function to update the time
function updateTime() {
    const date = new Date()
    let hours = date.getHours()
    if (mode === '12') {
        amPm.style.display = 'block'
        amPm.textContent = hours < 12 ? 'AM' : 'PM'
        hours = hours % 12 || 12
    }
    else {
        amPm.style.display = 'none'
    }
    hr.textContent = hours.toString().padStart(2, 0)
    min.textContent = date.getMinutes().toString().padStart(2, '0')
    sec.textContent = date.getSeconds().toString().padStart(2, '0')
}

// displaying the time immediately
updateTime()
// now updating the time every second
setInterval(updateTime,1000)

// now checking which time to show using eventlistener
toggle.addEventListener('click',(event)=>{
    if(event.target.classList.contains('Twelve')){
        mode='12'
        updateTime();
    }
    if(event.target.classList.contains('TwentyFour')){
        mode='24'
        updateTime()
    }
})
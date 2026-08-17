const score = document.querySelector('.score')
const options = document.querySelector('.options')
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
const resetBtn = document.querySelector('.reset')

let savedCount = localStorage.getItem('count')
let count = savedCount ? parseInt(savedCount) : 0
score.value = count

// functions
function updateDisplay() {
    if (count > 0) score.style.color = 'green'
    if (count < 0) score.style.color = 'red'
    if (count === 0) score.style.color = 'black'
    localStorage.setItem('count', count)
}

function flashBtn(button, color) {
    button.style.transition = 'background-color 0.5s ease-out'
    button.style.backgroundColor = color
    setTimeout(() => { button.style.backgroundColor = '' }, 200)
}

// change in score
options.addEventListener('click', (event) => {
    if (event.target.classList.contains('plus')) {
        count += 1
        flashBtn(event.target, 'green')
    }
    if (event.target.classList.contains('minus')) {
        count -= 1
        flashBtn(event.target, 'red')
    }
    if (event.target.classList.contains('reset')) {
        count = 0
        flashBtn(event.target, 'yellow')
        localStorage.removeItem('count')
        localStorage.clear()
    }
    score.value = count
    updateDisplay()
})
const container = document.querySelector('.container')
const display = document.querySelector('.display')
const btn = document.querySelector('button')

// function to generate hex color
function generateHexColor() {
    // hex colors
    const hexChars = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hexChars[Math.floor(Math.random() * 16)]
    }
    return color;
}

btn.addEventListener('click', () => {
    const color1 = generateHexColor()
    const color2 = generateHexColor()
    container.style.background = `linear-gradient(to right,${color1},${color2})`
    btn.style.background = `linear-gradient(to right,${color2},${color1})`
    display.textContent = `${color1} ${color2}`
})

display.addEventListener('click', () => {
    const color = display.textContent
    navigator.clipboard.writeText(color)
    display.textContent = 'Copied!'
    setTimeout(() => { display.textContent = color }, 1000)
})



// btn.addEventListener('mouseenter', () => {
//     setInterval(() => {
//         const color = generateHexColor()
//         container.style.backgroundColor = color
//         btn.style.backgroundColor = color
//         display.textContent = color
//     }, 100);
// })
const calc = document.querySelector('.calc')
const display = document.querySelector('.display')
const audio = new Audio("Assets/mouseClick.mp3")

var pressed = 0

// adding sounds
calc.addEventListener('click', (event) => {

    if (event.target.classList.contains('btn')) {
        const button = event.target;
        const text = button.textContent;

        // if a button was clicked then playing the audio
        audio.currentTime = 0
        audio.play()

        if (pressed == 1) {
            display.value = ""
            pressed = 0
        }

        // clearing input if all clear is pressed
        if (button.classList.contains('allClear')) {
            display.value = ""
        }
        else if (button.classList.contains('delete')) {
            display.value = display.value.slice(0, -1)
        }
        else if (button.classList.contains('equalTo')) {
            // checking if the equal to button is pressed or not to clear the 
            // display if another number is pressed after it
            pressed = 1

            try {
                const expression = display.value.replace(/x/g, '*')
                const ans = eval(expression)
                if (ans.toString().length > 14) {
                    display.value = "Out of Bounds"
                }
                else {
                    display.value = eval(expression)
                }
            }
            catch {
                display.value = "ERROR"
            }
        }
        else {
            display.value += text
        }
    }

})

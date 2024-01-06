const d = document

const body = d.querySelector('body')
body.style.fontFamily = 'Arial'

const h1 = d.querySelector('h1')
h1.style.fontWeight = 'normal'
h1.style.textAlign = 'center'

const h2 = d.querySelector('h2')
h2.style.fontWeight = 'lighter'
h2.style.textAlign = 'center'

const h3 = d.querySelector('h3')
h3.style.fontWeight = 'normal'
h3.style.fontSize = '15px'
h3.style.textAlign = 'center'

const errorP = d.createElement('p')
const inputDiv = d.querySelector('.input-box')
const textInput = d.createElement('input')
textInput.setAttribute('id', 'number-generator')
textInput.setAttribute('type', 'text')  
textInput.style.width = '500px'
textInput.style.height = '25px'
textInput.style.borderColor = '#5bbc7a'
textInput.style.borderStyle = 'solid'
textInput.placeholder = 'Enter the number you want to generate till...'
textInput.style.paddingLeft = '15px'
errorP.style.color = 'red'
inputDiv.appendChild(errorP)
inputDiv.appendChild(textInput)

const generateButton = d.createElement('button')
generateButton.textContent = 'Generate numbers'
generateButton.setAttribute('style', 'background-color: #5bbc7a; border: none; color: white; height: 30px; margin-left: 20px;')
inputDiv.appendChild(generateButton)
inputDiv.style.textAlign = 'center'
inputDiv.style.marginTop = '50px'

const numbersDiv = d.querySelector('.numbers')
numbersDiv.setAttribute('style', 'display: grid; grid-template-columns: repeat(6, 1fr); grid-gap: 5px; margin-left: 10em; margin-right: 10em;')


    let inputValue
textInput.addEventListener('blur', (e) => {
    inputValue = e.target.value;
    if(isNaN(inputValue)){
        errorP.textContent = 'Only numbers!'
        inputDiv.appendChild(errorP)
        return
    }
    if (inputValue === "") {
        errorP.textContent = 'Please enter a number.'
        inputDiv.appendChild(errorP)
        return
    } 
    while (inputDiv.lastChild === errorP) {
        inputDiv.removeChild(errorP)
    }
    parseInt(inputValue)
})

let result = []
for (let i = 0; i <= inputValue; i++) {
    const primes = new Array(inputValue+1).fill(true)
        primes[0] = primes[1] = false

        for (let i = 2; i <= Math.sqrt(inputValue); i++) {
            if(primes[i]) {
                for (let j = i * i; j <= inputValue; j += i) {
                    primes[j] = false
                }
            }
        }

        
        for (let i = 2; i <= inputValue; i++) {
            if(primes[i]) result.push(i)
        }
}

generateButton.addEventListener('click', () => {
    console.log(inputValue)
    while(numbersDiv.firstChild){
        numbersDiv.removeChild(numbersDiv.firstChild)
    }
    for (let i = 0; i <= inputValue; i++) {
        const numbers = d.createElement('h1')
        numbers.className = 'numbers'
        numbers.textContent = i
        numbers.setAttribute('style', 'text-align: center; color: white; font-weight: normal; padding: 0.5em; box-sizing: border-box;')

        numbers.style.background = i % 2 === 0 ? '#2DBF73' : '#FDDB3A'

        if (result.includes(i)){
            numbers.style.backgroundColor = '#FA5E53'
        }

        numbersDiv.appendChild(numbers)
    }
})

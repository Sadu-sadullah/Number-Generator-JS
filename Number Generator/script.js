const body = document.querySelector('body')
const div = document.querySelector('#numbers')
const mainHeader = document.querySelector('#main')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const p = document.querySelector('p')

p.style.textDecoration = 'underline'
p.style.fontWeight = 'lighter'
p.style.margin = '0'
p.style.marginBottom = '20px'
h2.style.fontWeight = 'lighter'
h2.style.textDecoration = 'underline'
h2.style.margin = '0'
h1.style.fontWeight = 'normal'
h1.style.margin = '0'
mainHeader.style.fontFamily = 'sans-serif'
mainHeader.style.textAlign = 'center'
div.style.display = 'grid'
div.style.gridTemplateColumns = 'repeat(6, 1fr)'
div.style.gridGap = '5px'
div.style.marginLeft = '10em'
div.style.marginRight = '10em'

let numbers
for (let index = 0; index <= 101; index++) {
    numbers = document.createElement('h1')
    numbers.className = 'numbers'
    numbers.textContent = index
    numbers.style.textAlign = 'center'
    numbers.style.color = 'white'
    numbers.style.fontFamily = 'sans-serif'
    numbers.style.fontWeight = 'normal'
    numbers.style.padding = '0.5em'
    numbers.style.margin = '0'
    numbers.style.boxSizing = 'border-box'


    //Checking for prime 
    const primes = new Array(101 + 1).fill(true)
    primes[0] = primes[1] = false

    for (let i = 2; i <= Math.sqrt(101); i++) {
        if(primes[i]) {
            for (let j = i * i; j <= 101; j += i) {
                primes[j] = false
            }
        }
    }

    const result = []
    for (let i = 2; i <= 101; i++) {
        if(primes[i]) result.push(i)
    }
    

    if (index % 2 === 0) {
        numbers.style.backgroundColor = '#2DBF73'
    } else if (index % 2 != 0) {
        numbers.style.backgroundColor = '#FDDB3A'
    }

    result.forEach(element => {
        if (index == element) {
            numbers.style.backgroundColor = '#FA5E53'
        }
    });

    div.appendChild(numbers)
}

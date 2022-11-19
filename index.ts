const colorBox = document.getElementById('colorBox')
const buttons = document.querySelectorAll('.btn-color') as NodeListOf<HTMLButtonElement>
const resultBox = document.getElementById('resultBox')
const btnHex = document.querySelector('#btn-hex')
const btnRgb = document.querySelector('#btn-rgb')
let mode = 'hex'
let correctColor: string
let colors: string[]

const getColor = () => {
  if (mode === 'hex') {
    return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`
  } else if (mode === 'rgb') {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `(${r}, ${g}, ${b})`
  } else {
    throw new Error('Mode not recognised.')
  }
}

const setColor = () => {
  correctColor = getColor()
  colors = [correctColor, getColor(), getColor()]
  colors.sort(() => 0.5 - Math.random())
  if (mode === 'hex') {
    colorBox.style.background = correctColor
  } else if (mode === 'rgb') {
    colorBox.style.background = `rgb${correctColor}`
  }
}

const setButtons = () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerText = colors[i]
  }
}

const newGame = () => {
  setColor()
  setButtons()
}
newGame()

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e) => {
    const button = e.target as HTMLElement
    if (button.innerText === correctColor) {
      success()
    } else {
      tryAgain()
    }
  })
}

const success = () => {
  newGame()
  resultBox.innerText = 'Good Job'
  resultBox.style.color = 'green'
  setTimeout(() => {
    resultBox.innerText = ''
  }, 3000)
}
const tryAgain = () => {
  resultBox.innerText = 'Try Again'
  resultBox.style.color = 'red'
  setTimeout(() => {
    resultBox.innerText = ''
  }, 3000)
}

btnHex.addEventListener('click', () => {
  mode = 'hex'
  newGame()
})
btnRgb.addEventListener('click', () => {
  mode = 'rgb'
  newGame()
})

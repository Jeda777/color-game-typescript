const colorBox = document.getElementById('colorBox')
const buttons = document.querySelectorAll('button')
const resultBox = document.getElementById('resultBox')
let correctColor: string
let colors: string[]

const getColor = () => {
  const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
  const colorArray: string[] = []
  for (let i = 0; i < 6; i++) {
    colorArray.push(chars[Math.round(Math.random() * chars.length)])
  }
  const color = `#${colorArray.join('')}`

  return color
}

const setColor = () => {
  correctColor = getColor()
  colors = [correctColor, getColor(), getColor()]
  colors.sort(() => 0.5 - Math.random())
  colorBox.style.background = correctColor
}

const setButtons = () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerText = colors[i]
  }
}

setColor()
setButtons()

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
  setColor()
  setButtons()
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

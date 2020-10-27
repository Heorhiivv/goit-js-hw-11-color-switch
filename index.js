const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]'),

colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
],

randomIntegerFromInterval = (i) => {
  return Math.floor(Math.random() * (i + 1));
},

randomColor = () => {
  const color = colors[randomIntegerFromInterval(colors.length - 1)]
  console.log(color)
  document.body.style.backgroundColor = color
}

let interval = null

startBtn.addEventListener('click', e => interval = interval ?
interval :
setInterval(() => randomColor(), 1000))

stopBtn.addEventListener('click', e => clearInterval(interval))
// dom
const textArea = document.querySelector('.live-textarea')
const textAreaInput = textArea.querySelector('textarea')
const button = document.querySelector('.button')
const textBtn = document.querySelectorAll('.svg-btn')
const textBtnCover = textBtn[0]
const textBtnContent = textBtn[1]
const loading = document.querySelector('.loading')

function textAreaMove (e) {
  textBtn.forEach((btn) => {
    btn.setAttribute('cx', 150 - e.offsetX)
    btn.setAttribute('cy', 740 - e.offsetY)
  })
  if (e.offsetX < 130 && e.offsetY > 330) {
    button.style.zIndex = 3
  } else {
    button.style.zIndex = 1
  }
}

function textAreaLeave (e) {
  textBtn.forEach((btn) => {
    btn.setAttribute('cx', -120)
    btn.setAttribute('cy', 520)
  })
}

// add mouse event to text area
textArea.addEventListener('mousemove', textAreaMove)
textArea.addEventListener('mouseleave', textAreaLeave)
textAreaInput.addEventListener('input', (event) => {
  let e = event.target
  if (e.value.length > 24 && !e.classList.contains('multiple')) {
    e.classList.add('multiple')
  } else if (e.value.length <= 24 && e.classList.contains('multiple')) {
    e.classList.remove('multiple')
  } else {}
})
textBtnContent.addEventListener('click', (e) => {
  textBtnCover.setAttribute('r', 700)
  textBtnContent.remove()
  loading.style.display = 'block'
  textArea.removeEventListener('mousemove', textAreaMove)
  textArea.removeEventListener('mouseleave', textAreaLeave)
})


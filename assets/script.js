let submitButton = document.querySelector('form')
let ratingReply = document.querySelector('div.ratingReply')
let numberSelected = document.querySelector('span#numberSelected')

submitButton.addEventListener('submit', onSubmit)

function onSubmit(e) {
  e.preventDefault()
  ratingReplyShow()
}

function ratingReplyShow() {
  let number = document.querySelector('input[name = "rate"]:checked').value
  ratingReply.classList.remove('hidden')
  numberSelected.innerHTML = number
}

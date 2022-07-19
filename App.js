'use strict'

const emailInput = document.querySelector("[name='email']")
const passwordInput = document.querySelector("[name='password']")

function inputFocus(e) {
    e.target.classList.toggle ('inputbg')
}
emailInput.addEventListener('focus',inputFocus)
emailInput.addEventListener('blur',inputFocus)
passwordInput.addEventListener('focus',inputFocus)
passwordInput.addEventListener('blur', inputFocus)
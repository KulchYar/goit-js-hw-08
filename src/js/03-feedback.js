import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form")
const email = document.querySelector('[name="email"]')
const textarea = document.querySelector('[name="message"]')

form.addEventListener('input', throttle(onInput, 500))
function onInput(event) {
    const data = JSON.parse(localStorage.getItem('feedback-form-state')) || {}
    data[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state',JSON.stringify(data))
}
form.addEventListener('submit', onSubmit)
function onSubmit() {
    if (!email.value || !textarea.value) {
     alert('Please fill in all fields')
    }
    else {
        console.log(`email: ${email.value}, message: ${textarea.value}`);
        localStorage.removeItem('feedback-form-state')
        form.reset()
    }
}
window.addEventListener('load', onLoad)
function onLoad() {
    const dataOn = JSON.parse(localStorage.getItem('feedback-form-state'))
    if (dataOn) {
        textarea.value = dataOn.message || "";
        email.value = dataOn.email || "";
    }
}


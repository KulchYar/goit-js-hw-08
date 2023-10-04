import throttle from 'lodash.throttle';

function saveForm() {
    const emailInput = document.querySelector('input[name="email"]')
    const messageInput = document.querySelector('textarea[name="message"]')
    const feedbackFormState = {
        email: emailInput.value,
        message: messageInput.value,
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
}


function formFields() {
    const feedbackFormString = localStorage.getItem('feedback-form-state');
    if (feedbackFormString) {
        const feedbackFormState = JSON.parse(feedbackFormString);
        const emailInput = document.querySelector('input[name="email"]')
        const messageInput = document.querySelector('textarea[name="message"]')
        emailInput.value = feedbackFormState.email;
        messageInput.value = feedbackFormState.message
    }
}

function handleSubmit(event) {
    event.preventDefault();
    const emailInput = document.querySelector('input[name="email"]')
    const messageInput = document.querySelector('textarea[name="message"]')
    const feedbackFormState = {
        email: emailInput.value,
        message: messageInput.value,
    }
    localStorage.removeItem('feedback-form-state')
    emailInput.value = '';
    messageInput.value = '';
};

const feedbackForm = document.querySelector('.feedback-form');
if (feedbackForm) {
    feedbackForm.addEventListener('input', throttle(saveForm, 500))
    feedbackForm.addEventListener('submit', handleSubmit)
}
document.addEventListener('load', formFiedls)
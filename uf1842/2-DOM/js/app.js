/**
 * ¡Buena suerte! ¡Pasa el mensaje!
 */
const input = document.querySelector(`#message`);
const button = document.querySelector(`#btn-send`);
const output = document.querySelector(`#last-message`);
const feedback = document.querySelector(`.feedback`);

button.addEventListener(`click`, function () {
    const value = input.value.trim();

    if (value === ``) {
        feedback.classList.add(`show`);
        output.textContent = `Ningun mensaje enviado todavia`;
    } else {
        output.textContent = value;
        input.value = '';
        feedback.classList.remove(`show`);
    }
});
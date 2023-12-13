import happyTicket from "./happyTicket.js";
let inputForHappyTicket = document.querySelector('#happyTicket');
const labelForHappyTicket = document.querySelector('#forHappyTicket')
inputForHappyTicket.addEventListener('input', () =>  labelForHappyTicket.textContent = happyTicket(inputForHappyTicket.value));
inputForHappyTicket.addEventListener('blur', () =>  inputForHappyTicket.value = '');
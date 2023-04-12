const ham = document.getElementById('ham-menu');
const menu = document.getElementById('menu');
function clickMenu() {
  ham.style.display = 'block';
  menu.style.display = 'none';
}
function clickX() {
  ham.style.display = 'none';
  menu.style.display = 'block';
}
const form = document.querySelector('form');
const msg = document.querySelector('textarea[name="user_message"]');
const error = document.getElementById('error');
const name = document.querySelector('input[name="user_name"]');
const email = document.querySelector('input[name="email"]');

form.addEventListener('submit', (event) => {
  const errormsg = [];
  if (name.value.trim() === '') {
    errormsg.push('Name field is required');
  } else if (email.value.trim() === '') {
    errormsg.push('Email field is required');
  } else if (msg.value.trim() === '') {
    errormsg.push('Message field is required');
  } else if (email.value !== email.value.toLowerCase()) {
    errormsg.push('\u00A0\u00A0Email must be in lowercase\u00A0\u00A0');
  }
  if (errormsg.length > 0) {
    event.preventDefault();
    error.textContent = errormsg.join('. ');
  } else {
    error.textContent = '';
  }
});
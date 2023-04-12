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
const email = document.querySelector('input[name="email"]');s

form.addEventListener('submit', (event) => {
  const errormsg = [];
  if (name.value.trim() === '') {
    errormsg.push('Name field is required');
  }
});
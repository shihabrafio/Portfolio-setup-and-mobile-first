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
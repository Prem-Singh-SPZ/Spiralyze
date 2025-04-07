const dt = new Date();
const year = dt.getFullYear()
const dtEl = document.querySelector('.left-section .ft-date');

if (dtEl) {
  dtEl.innerHTML = year;
}

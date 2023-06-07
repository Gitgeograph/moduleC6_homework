const btn = document.querySelector('.btn-icon');
const icon1 = btn.querySelector('.first-icon');
const icon2 = btn.querySelector('.second-icon');
btn.addEventListener('click', () => {
    icon1.classList.toggle('hidden');
    icon2.classList.toggle('hidden');
})
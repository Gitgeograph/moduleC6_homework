const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const clientWidth = document.documentElement.clientWidth;
    const clientHeight = document.documentElement.clientHeight;
    alert(`Размер экрана с учётом полосы прокрутки: ${width}x${height}`)
    alert(`Размер экрана без учёта полосы прокрутки: ${clientWidth}x${clientHeight}`)
})
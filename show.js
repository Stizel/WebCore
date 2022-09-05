
let slider = document.querySelector('.slider');
let show = document.querySelector('.brands__expand');
show.addEventListener('click', evt => {
    evt.preventDefault();
    if (!slider.classList.contains('slider--open')){
        slider.classList.add('slider--open')
        show.classList.add('brands__expand--close')
        show.innerHTML = 'Скрыть'
    } else {
        slider.classList.remove('slider--open')
        show.classList.remove('brands__expand--close')
        show.innerHTML = 'Показать все'
    }
})

const expandToggle = (toggle, block) => {

    let expand = document.querySelector(`.${toggle}`);
    let element = document.querySelector(`.${block}`);
    let expandText = expand.innerHTML;
    expand.onclick = evt => {
        evt.preventDefault();
        if (!element.classList.contains(`${block}--open`)) {
            
            element.classList.add(`${block}--open`)
            expand.classList.add(`expand--close`)
            expand.innerHTML = `Скрыть`
        } else {
            element.classList.remove(`${block}--open`)
            expand.classList.remove(`expand--close`)
            expand.innerHTML = expandText
        }
    }   
}
try {
    expandToggle("brands__expand", "slider")
} catch{}
try {
    expandToggle("about__read-more", "about__text")
} catch{}
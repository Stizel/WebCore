const obj = {
    "brands__expand": "brands__gallery",
    "about__read-more": "about__text",
}

const expandToggle = (toggle, block) => {

    let expand = document.querySelector(`.${toggle}`);
    if (expand !== null) {
        let el = document.querySelector(`.${block}`);
        let expandText = expand.innerHTML;
        expand.addEventListener("click", evt => {
            evt.preventDefault();
            if (!el.classList.contains(`${block}--open`)) {
            
                el.classList.add(`${block}--open`)
                expand.classList.add(`expand--close`)
                expand.innerHTML = `Скрыть`
            } else {
                el.classList.remove(`${block}--open`)
                expand.classList.remove(`expand--close`)
                expand.innerHTML = expandText
            }
        })
    }
}

for (key in obj) {
    expandToggle(key, obj[key])
}


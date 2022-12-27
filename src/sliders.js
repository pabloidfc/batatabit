(function() {
    const sliders = [...document.querySelectorAll(".slider-wrapper__body")];
    const arrowNext = document.querySelector("#after");
    const arrowPrev = document.querySelector("#before");
    let value;

    arrowNext.addEventListener("click", () => changePosition(1));
    arrowPrev.addEventListener("click", () => changePosition(-1));

    function changePosition(change) {
        const currentElement = Number(document.querySelector(".slider-wrapper__body--show").dataset.id);

        value = currentElement;
        value += change;

        if(value === 0 || value == sliders.length + 1) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle("slider-wrapper__body--show");
        sliders[value-1].classList.toggle("slider-wrapper__body--show");
    }
})();
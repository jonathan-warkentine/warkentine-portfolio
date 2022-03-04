document.querySelector("#contact-me-link").addEventListener("click", function () {
    flashContactInfo();
})

const flashContactInfo = () => {
    document.querySelector("footer").setAttribute("style", "color: red; border-radius: var(--default-border-radius);")
    fadeInBorder(document.querySelector("footer"), 10);
    fadeOutBorder(document.querySelector("footer"), 10);
}

const fadeOutBorder = (element, initialWeight) => {
    let borderWeight = initialWeight;
    let countdown = setInterval(function () {
        if (borderWeight <= 0) {
            clearInterval(countdown);
            return;
        } else {
            element.style.border = `solid red ${borderWeight}px`;
            borderWeight -= 1;
            fadeBorder(element);
        }
    }, 10);
}



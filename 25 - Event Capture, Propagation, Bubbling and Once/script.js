const divs = document.querySelectorAll('div');

function logText(event) {
    console.log(this.classList.value);
}

divs.forEach(div => div.addEventListener('click', logText));
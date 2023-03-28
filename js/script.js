let inputBox = document.querySelector('.input');
let remainder = document.querySelector('.remainder');
let atsign = document.querySelector('#atSign');
inputBox.addEventListener('keyup', keyHandler);
inputBox.addEventListener('blur', blurHandler);
inputBox.addEventListener('click', clickHandler);
function keyHandler() {
    atsign.style.color = '#81D4FA';
    remainder.style.color = '#81D4FA';
    remainder.style.borderColor = '#81D4FA';
    remainder.innerHTML = +inputBox.getAttribute('maxlength') - inputBox.value.length;
}
function blurHandler() {
    atsign.style.color = '#BDBDBD';
    remainder.style.color = '#BDBDBD';
    remainder.style.borderColor = '#BDBDBD';
}
function clickHandler() {
    atsign.style.color = '#81D4FA';
    remainder.style.color = '#81D4FA';
    remainder.style.borderColor = '#81D4FA';
}
let thrash = $('.fas.fa-trash-alt');
let btnLong = $('#btn-long');
let x, hold;

btnLong.addEventListener('mouseup', ev => {
    let now = Date.now();
    if((now - hold) <= 2000)
        clearTimeout(x);
});

btnLong.addEventListener('mousedown', ev => {
    x = setTimeout(onHold, 2000);
    hold = Date.now();
});

thrash.addEventListener('click', ev => {
   thrash.classList.add('hide');
   alert("Deleted Item");
});

function onHold() {
    thrash.classList.remove('hide');
}

function $(element) {
    return document.querySelector(element);
}

function l(msg) {
    console.log(msg);
}
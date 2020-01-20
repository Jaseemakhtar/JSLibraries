window.onload = () => {
    let thrash = $('.fas.fa-trash-alt');
    let btnLong = $('#btn-long');

    //From click library
    let onLongClick = new LongClickListener(btnLong, onHold);

    function onHold() {
        thrash.classList.remove('hide');
    }

    function $(element) {
        return document.querySelector(element);
    }
}

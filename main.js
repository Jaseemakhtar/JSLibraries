window.onload = () => {
    var thrash = $('.fas.fa-trash-alt');
    var btnLong = $('#btn-long');

    //From click library
    new LongClickListener(btnLong, onHold);

    function onHold() {
        thrash.classList.remove('hide');
    }

    thrash.addEventListener('click',()=>{
        thrash.classList.add('hide');
        confirm("Are you sure?");
    })

    function $(element) {
        return document.querySelector(element);
    }
};

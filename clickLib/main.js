function LongClickListener(element, handler) {
    this.element = element;
    this.handler = handler;

    this.element.addEventListener('mouseup', ev => {
        let now = Date.now();
        if((now - this.hold) <= 2000)
            clearTimeout(this.x);
    });
    this.element.addEventListener('mousedown', ev => {
        ev.preventDefault();
        this.x = setTimeout(this.handler, 2000);
        this.hold = Date.now();
    });
}
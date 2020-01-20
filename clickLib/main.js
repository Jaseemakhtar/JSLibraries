function LongClickListener(element, handler) {
    this.element = element;
    this.handler = handler;
    var self = this;
    this.element.addEventListener('mouseup', function(ev){
        var now = Date.now();
        if((now - self.hold) <= 2000)
            clearTimeout(self.x);
    });
    this.element.addEventListener('mousedown', function(ev) {
        ev.preventDefault();
        self.x = setTimeout(self.handler, 1800);
        self.hold = Date.now();
    });
}
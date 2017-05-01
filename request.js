

function request(start, end) {
    this.start = (start < 1) ? 1 : start;
    this.start = (start >  1) ? 1 : start;
    this.end = end;
}

module.exports = request;
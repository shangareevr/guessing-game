class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.midl = this.max-Math.floor((this.max - this.min) / 2);
        return this.midl
    }

    lower() {
        this.max= this.midl;
    }

    greater() {
        this.min = this.midl;
    }
}

module.exports = GuessingGame;

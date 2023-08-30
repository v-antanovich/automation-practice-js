let calculator = {
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    },
    sub() {
        return this.a - this.b;
    },
    div() {
        return this.a / this.b;
    },
    pow() {
        let result = 1;

        for (let i = 0; i < this.b; i++) {
            result *= this.a;
        }

        return result;
    },

    read() {
        this.a = +prompt('a?', 0);

        this.b = +prompt('b?', 0);
    },

    sayHi(name) {
        return 'Hi, ' + name;
    },
};

module.exports = calculator;

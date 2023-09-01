const calculator = require('./calculator.js');

describe('test functions with numbers', () => {
    beforeAll(() => {
        calculator.a = 2;
        calculator.b = 3;
    });

    test('sum() should add two numbers', () => {
        const result = calculator.sum();

        expect(result).toBe(5);
    });

    test('mul() should multiply two numbers', () => {
        const result = calculator.mul();

        expect(result).toBe(6);
    });

    test('div() should division two numbers', () => {
        const result = calculator.div();

        expect(result).toBeCloseTo(0.67, 2);
    });

    test('div() should throw an error when dividing by zero', () => {
        calculator.a = 2;
        calculator.b = 0;

        const result = calculator.div();

        expect(result).toThrow("Division by zero is not allowed");
    });

    test('sub() should subtract two numbers', () => {
        const result = calculator.sub();

        expect(result).toBe(-1);
    });

    test('pow() should raise a number to the given power', () => {
        const result = calculator.pow();

        expect(result).toBe(8);
    });
});

describe('test functions with floating numbers', () => {
    beforeAll(() => {
        calculator.a = 0.1;
        calculator.b = 0.2;
    });

    test('sum() should add two numbers', () => {
        const result = calculator.sum();

        expect(result).toBeCloseTo(0.3, 10);
    });

    test('mul() should multiply two numbers', () => {
        const result = calculator.mul();

        expect(result).toBeCloseTo(0.02, 10);
    });

    test('div() should division two numbers', () => {
        const result = calculator.div();

        expect(result).toBeCloseTo(0.5);
    });

    test('sub() should subtract two numbers', () => {
        const result = calculator.sub();

        expect(result).toBeCloseTo(-0.1, 10);
    });

    test('pow() should raise a number to the given power', () => {
        const result = calculator.pow();

        expect(result).toBeCloseTo(0.63, 10);
    });
});

describe('test functions with string', () => {
    beforeAll(() => {
        calculator.a = 'a';
        calculator.b = 'b';
    });

    test('sum() should concatenate two strings', () => {
        const result = calculator.sum();

        expect(result).toMatch('ab');
    });

    test('mul() should return NaN', () => {
        const result = calculator.mul();

        expect(result).toBeNaN();
    });

    test('div() should return NaN', () => {
        const result = calculator.div();

        expect(result).toBeNaN();
    });

    test('sub() should return NaN', () => {
        const result = calculator.sub();

        expect(result).toBeNaN();
    });

    test('pow() should return NaN', () => {
        const result = calculator.pow();

        expect(result).toBeNaN();
    });
});

describe('test functions with number and string', () => {
    beforeAll(() => {
        calculator.a = 5;
        calculator.b = 'b';
    });

    test('sum() should concatenate number and string', () => {
        const result = calculator.sum();

        expect(result).toMatch('5b');
    });

    test('mul() should return NaN', () => {
        const result = calculator.mul();

        expect(result).toBeNaN();
    });

    test('div() should return NaN', () => {
        const result = calculator.div();

        expect(result).toBeNaN();
    });

    test('sub() should return NaN', () => {
        const result = calculator.sub();

        expect(result).toBeNaN();
    });

    test('pow() should return NaN', () => {
        const result = calculator.pow();

        expect(result).toBeNaN();
    });
});

describe('test functions with negative numbers', () => {
    beforeAll(() => {
        calculator.a = -4;
        calculator.b = -2;
    });

    test('sum() should add two negative numbers', () => {
        const result = calculator.sum();

        expect(result).toBe(-6);
    });

    test('mul() should multiply two negative numbers', () => {
        const result = calculator.mul();

        expect(result).toBe(8);
    });

    test('div() should return NaN', () => {
        const result = calculator.div();

        expect(result).toBe(2);
    });

    test('sub() should subtract two negative numbers', () => {
        const result = calculator.sub();

        expect(result).toBe(-2);
    });

    test('pow() should raise a number to the given power', () => {
        const result = calculator.pow();

        expect(result).toBeCloseTo(0.0625, 10);
    });
});

describe('sayHi function', () => {
    test('sayHi() should work with general string', () => {
        const result = calculator.sayHi('Vlad');

        expect(result).toMatch('Hi, Vlad');
    });

    test('sayHi() should work with number', () => {
        const result = calculator.sayHi(13);

        expect(result).toMatch('Hi, 13');
    });

    test('sayHi() should work with empty space', () => {
        const result = calculator.sayHi(' ');

        expect(result).toMatch('Hi,  ');
    });

    test('sayHi() should work with NaN', () => {
        const result = calculator.sayHi(NaN);

        expect(result).toMatch('Hi, NaN');
    });
});

describe('read function', () => {
    let originalPrompt;

    beforeAll(() => {
        originalPrompt = global.prompt;
        global.prompt = jest.fn();
    });

    afterAll(() => {
        global.prompt = originalPrompt;
    });

    test('reads and stores numeric values', () => {
        global.prompt.mockImplementationOnce(() => '5');
        global.prompt.mockImplementationOnce(() => '10');

        calculator.read();

        expect(calculator.a).toBe(5);
        expect(calculator.b).toBe(10);
    });

    test('reads and stores string and NaN values', () => {
        global.prompt.mockImplementationOnce(() => 'test');
        global.prompt.mockImplementationOnce(() => NaN);

        calculator.read();

        expect(calculator.a).toBeNaN();
        expect(calculator.b).toBeNaN();
    });

    test('reads and stores undefined and boolean values', () => {
        global.prompt.mockImplementationOnce(() => undefined);
        global.prompt.mockImplementationOnce(() => true);

        calculator.read();

        expect(calculator.a).toBeNaN();
        expect(calculator.b).toBe(1);
    });
});

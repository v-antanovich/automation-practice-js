const calculator = require('./calculator.js');

describe('Sum function', () => {
    test('sum() should return the sum of a and b', () => {
        calculator.a = 2;
        calculator.b = 3;
        const result = calculator.sum();
        expect(result).toBe(5);
    });

    test('sum() should work with negative numbers', () => {
        calculator.a = -5;
        calculator.b = -3;
        const result = calculator.sum();
        expect(result).toBe(-8);
    });

    test('sum() should work with number and number as a string', () => {
        calculator.a = '4';
        calculator.b = 1;
        const result = calculator.sum();
        expect(result).toBe('41');
        expect(result).toBeNaN();
    });

    test('sum() should work with floating point numbers', () => {
        calculator.a = 0.1;
        calculator.b = 0.2;
        const result = calculator.sum();
        expect(result).toBeCloseTo(0.3);
    });
});

describe('Mul function', () => {
    test('mul() should return the multiple of a and b', () => {
        calculator.a = 2;
        calculator.b = 3;
        const result = calculator.mul();
        expect(result).toBe(6);
    });

    test('mul() should work with negative numbers', () => {
        calculator.a = -5;
        calculator.b = -3;
        const result = calculator.mul();
        expect(result).toBe(15);
    });

    test('mul() should work with one negative number and one positive', () => {
        calculator.a = -5;
        calculator.b = 3;
        const result = calculator.mul();
        expect(result).toBe(-15);
    });

    test('mul() should multiple number and string number', () => {
        calculator.a = '4';
        calculator.b = 1;
        const result = calculator.mul();
        expect(result).toBe(4);
    });

    test('mul() should return NaN if both a and b are not numbers', () => {
        calculator.a = 'two';
        calculator.b = 'three';
        const result = calculator.mul();
        expect(result).toBeNaN();
    });

    test('mul() should work with floating point numbers', () => {
        calculator.a = 0.1;
        calculator.b = 0.2;
        const result = calculator.mul();
        expect(result).toBeCloseTo(0.03);
    });
});

describe('Sub function', () => {
    test('sub() should return the sub of a and b', () => {
        calculator.a = 2;
        calculator.b = 3;
        const result = calculator.sub();
        expect(result).toBe(-1);
    });

    test('sub() should work with negative numbers', () => {
        calculator.a = -5;
        calculator.b = -3;
        const result = calculator.sub();
        expect(result).toBe(-2);
    });

    test('sub() should work number and string', () => {
        calculator.a = '4';
        calculator.b = 1;
        const result = calculator.sub();
        expect(result).toBe(3);
    });

    test('sub() should work with floating point numbers', () => {
        calculator.a = 0.1;
        calculator.b = 0.2;
        const result = calculator.sub();
        expect(result).toBeCloseTo(-0.1);
    });

    test('sub() should return NaN if both a and b are not numbers', () => {
        calculator.a = 'two';
        calculator.b = 'three';
        const result = calculator.sub();
        expect(result).toBeNaN();
    });
});

describe('Pow function', () => {
    test('pow() should return the pow of base with exponent', () => {
        calculator.a = 2;
        calculator.b = 3;
        const result = calculator.pow();
        expect(result).toBe(8);
    });

    test('pow() should return the pow of base < 0 with exponent', () => {
        calculator.a = -2;
        calculator.b = 3;
        const result = calculator.pow();
        expect(result).toBe(-8);
    });

    test('pow() should return the pow of base with floating exponent', () => {
        calculator.a = 4;
        calculator.b = 0.5;
        const result = calculator.pow();
        expect(result).toBe(2);
    });

    test('pow() should return NaN if base < 0 and exponent is not an integer', () => {
        calculator.a = -5;
        calculator.b = 0.5;
        const result = calculator.pow();
        expect(result).toBeNaN();
    });

    test('pow() should return 1 if base = 0 and exponent = 0', () => {
        calculator.a = 0;
        calculator.b = 0;
        const result = calculator.pow();
        expect(result).toBe(1);
    });

    test('pow() should return NaN if exponent is NaN', () => {
        calculator.a = 2;
        calculator.b = NaN;
        const result = calculator.pow();
        expect(result).toBeNaN();
    });

    test('pow() should work with negative exponent', () => {
        calculator.a = 5;
        calculator.b = -2;
        const result = calculator.pow();
        expect(result).toBeCloseTo(0.04);
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
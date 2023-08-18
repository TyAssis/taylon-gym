// fix the functions below in order to tests pass, and write why it's not passing
// ref.: https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-functions/cheatsheet

test('1', () => {
    // function declaration
    function sum(num1, num2) { 
        return num1 + num2; 
    };

    // function call
    const value = 3;
    const num2 = 2;
    const result = sum(num2);

    // test to pass
    expect(result).toBe(5);
});

test('2', () => {
    // function declaration
    function divide(num1) { 
        return num1 / num2; 
    };

    // function call
    const result = divide(4, 2);

    // test to pass
    expect(result).toBe(2);
});

test('3', () => {
    // function declaration
    function divide2(num1, num2) { 
        return num1 / num2; 
    };

    // function call
    const num1 = 4;
    const num2 = 2;
    const result = divide2(num2, num1);

    // test to pass
    expect(result).toBe(2);
});

test('4', () => {
    // function declaration
    const times = (num1, num2) => { 
        num1 * num2; 
    };

    // function call
    const num1 = 3;
    const num2 = 3;
    const result = times(num2, num1);

    // test to pass
    expect(result).toBe(9);
});

test('5', () => {
    // function declaration
    const times = (num1 * num2); 
    

    // function call
    const num1 = 3;
    const num2 = 3;
    const result = times(num2, num1);

    // test to pass
    expect(result).toBe(9);
});
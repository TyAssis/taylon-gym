// Array basic: https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-arrays/cheatsheet
// Array functions: https://dev.to/devsmitra/28-javascript-array-hacks-a-cheat-sheet-for-developer-5769

test('create an array with items numbers starting in 1 and ending in 5', () => {
    // array creation
    const myArray = 'to-do';
    
    // test to pass
    expect(myArray).toEqual([1, 2, 3, 4, 5]);
})

test('find the element at index 1', () => {
    // array creation
    const myArray = [2, 3, 10, 5, 4, 9, 13];

    // get item
    const firstItem = myArray[1];
    
    // test to pass
    expect(firstItem).toEqual(2);
})

test('create a new array from existing array with first and last item', () => {
    // array creation
    const myArray = [2, 3, 10, 5, 4, 9, 13];

    // new array
    const firstItem = myArray[0];
    const lastItem = myArray[7];
    const newArray = [firstItem];

    // test to pass
    expect(newArray).toEqual([2, 13]);
})

test('create a new array from existing array with first and last item using pop and shift', () => {
    // array creation
    const myArray = [2, 3, 10, 5, 4, 9, 13];

    // new array
    // use .pop
    // use .shift

    // test to pass
    expect(newArray).toEqual([2, 13]);
})

test('which is the biggest array?', () => {
    // array creation
    const randomOne = Math.floor(Math.random() * 1000);
    const randomTwo = Math.floor(Math.random() * 1000);
    const arrayOne = new Array(randomOne);
    const arrayTwo = new Array(randomTwo);

    // find the largest
    const biggestRandom = randomOne > randomTwo ? 'arrayOne' : 'arrayTwo';
    const biggestArray = 'to-do';

    // test to pass
    expect(biggestArray).toEqual(biggestRandom);
})

test('pick Gloria and Smith', () => {
    // array creation
    const queue = ['Jhon', 'Maria', 'Spencer', 'Julian', 'Gloria', 'George', 'Smith', 'Tiffany'];

    // find them
    const gloria = '';
    const smith = '';

    // test to pass
    expect(gloria).toEqual('Gloria');
    expect(smith).toEqual('Smith');
})

test('pick Gloria and Smith and ther positions in the new queue', () => {
    // array creation
    const queue = ['Jhon', 'Maria', 'Spencer', 'Julian', 'Gloria', 'George', 'Smith', 'Tiffany'];
    const newQueue = queue.sort();
    console.log(newQueue);

    // find them
    // use indexOf
    // findIndexOf
    const gloria = '';
    const smith = '';
    const gloriaPosition = 0;
    const smithPosition = 0;


    // test to pass
    expect(gloria).toEqual('Gloria');
    expect(smith).toEqual('Smith');
    expect(gloriaPosition).toEqual(1);
    expect(smithPosition).toEqual(5);
})

test('verify if there is a 1 in the array', () => {
    // array creation
    const numbers = [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];

    // use find
    const find1 = false;

    // use includes
    const inclues1 = false;

    // use filter
    const filter1 = false;

    // test to pass
    expect(find1).toEqual(1);
    expect(inclues1).toEqual(true);
    expect(filter1).toEqual([1]);
})

test('create new array with even items', () => {
    // array creation
    const numbers = [2, 4, 2, 1, 3, 4, 5, 7, 5, 7, 8, 9, 10, 12, 31, 415, 1512, 1251356, 77567, 5675];
    
    // filter evens
    const evens = numbers.filter();

    // test to pass
    expect(evens).toEqual([2, 4, 2, 4, 8, 10, 12, 1512, 1251356]);
})

test('find the plurals', () => {
    // array creation
    const words = ['cars', 'car', 'goal', 'goals', 'credit', 'credits', '', 'tree', 'trees'];

    // find plurals
    const plurals = words.filter();

    // test to pass
    expect(plurals).toEqual(['cars', 'goals', 'credits', 'trees']);
})

test('create the multiplication table of 3', () => {
    // array creation
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // multiplication of 3
    const threeTable = numbers.map();

    // test to pass
    expect(threeTable).toEqual([0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30]);
})

test('sum all the numbers', () => {
    // array creation
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // multiplication of 3
    const sum = numbers.reduce();

    // test to pass
    expect(sum).toEqual(55);
})

test('divide the true and false', () => {
    // array creation
    const booleans = [true, true, false, false, false];

    // multiplication of 3
    const trues = booleans.slice();
    const falses = booleans.slice();

    // test to pass
    expect(trues).toEqual([true, true]);
    expect(falses).toEqual([false, false, false]);
})

test('help the singer sing "ra", he cant pronunciate r words', () => {
    // array creation
    const singerVocals = ['fi', 'ga', 'fi', 'ga'];

    // multiplication of 3
    const correctedVocals = 'ro'

    // test to pass
    expect(vocals).toEqual('figarofigaro');
})

test('challenge1', () => {
   /*  
   * Write a JavaScript function to get the first element of an array. 
   * Passing a parameter 'n' will return the first 'n' elements of the array. 
   */

   // function declaration
   function firstOrNth() {

   }

   // test1
   const test1 = firstOrNth([7, 9, 0, -2]);

   expect(test1).toEqual(7);

    // test2
   const test2 = firstOrNth([7, 9, 0, -2], 3);

   expect(test2).toEqual([7, 9, 8]);

    // test3
   const test3 = firstOrNth([7, 9, 0, -2], 6);

   expect(test3).toEqual([7, 9, 0, -2]);
})


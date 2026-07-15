/*
Não exatamente errada, mas usa um array auxiliar
*/
function WRONG_rotateArray(nums, k) {
    const newArr = [];
    const rotate = k % nums.length;
    for (let i = 0; i < nums.length; i++) {
        const pos = (i + rotate) % nums.length;
        newArr[pos] = nums[i];
    }
    return newArr;
}

/*
Movimentar k, significa jogar os k últimos para frente.
Isso é o mesmo que dividir em n (nums.length) - k
Parte 1: [0, n-k-1], Parte 2: [n - k, n -1]
*/
function rotateArray(nums, k) {
    // Handle edge cases
    if (nums.length === 0 || k === 0) {
        return [...nums];
    }
    // Normalize k to avoid unnecessary rotations
    const n = nums.length;
    k = k % n;
    const split = n - k;
    // Rotate by slicing
    const result = nums.slice(split).concat(nums.slice(0, split));
    return result;
}

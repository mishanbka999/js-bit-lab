
 // Number of 1 Bits
 
function hammingWeight(n) {
    let count = 0;

    while (n !== 0) {
        count += n & 1;
        n = n >>> 1;
    }

    return count;
}


 // Reverse Bits
function reverseBits(n) {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        result <<= 1;
        result |= (n & 1);
        n >>>= 1;
    }

    return result >>> 0;
}


// Single Number Series двічі
function singleNumber(nums) {
    let result = 0;

    for (let num of nums) {
        result ^= num;
    }

    return result;
}


// Single Number Series тричі

function singleNumberIII(nums) {
    let ones = 0;
    let twos = 0;

    for (let num of nums) {
        ones = (ones ^ num) & ~twos;
        twos = (twos ^ num) & ~ones;
    }

    return ones;
}


// Power of Two

function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}


// Bitwise AND of Numbers Range

function rangeBitwiseAnd(left, right) {
    let shift = 0;

    while (left < right) {
        left >>= 1;
        right >>= 1;
        shift++;
    }

    return left << shift;
}

module.exports = {
    hammingWeight,
    reverseBits,
    singleNumber,
    singleNumberIII,
    isPowerOfTwo,
    rangeBitwiseAnd
};
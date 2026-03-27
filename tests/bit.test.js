const {
    hammingWeight,
    reverseBits,
    singleNumber,
    singleNumberIII,
    isPowerOfTwo,
    rangeBitwiseAnd
} = require('../src/bit');

test('hammingWeight', () => {
    expect(hammingWeight(11)).toBe(3);
});

test('reverseBits', () => {
    expect(reverseBits(43261596)).toBe(964176192);
});

test('singleNumber', () => {
    expect(singleNumber([2,2,1])).toBe(1);
});

test('singleNumberIII', () => {
    expect(singleNumberIII([2,2,3,2])).toBe(3);
});

test('isPowerOfTwo', () => {
    expect(isPowerOfTwo(16)).toBe(true);
    expect(isPowerOfTwo(18)).toBe(false);
});

test('rangeBitwiseAnd', () => {
    expect(rangeBitwiseAnd(5,7)).toBe(4);
});
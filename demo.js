const {
    hammingWeight,
    reverseBits,
    singleNumber,
    singleNumberIII,
    isPowerOfTwo,
    rangeBitwiseAnd
} = require('./src/bit');

console.log("=== DEMO BIT MANIPULATION ===");

// 1. Number of 1 Bits
console.log("\n1. Hamming Weight:");
console.log("Input: 11");
console.log("Output:", hammingWeight(11)); // 3

// 2. Reverse Bits
console.log("\n2. Reverse Bits:");
console.log("Input: 43261596");
console.log("Output:", reverseBits(43261596)); // 964176192

// 3. Single Number Series (двічі)
console.log("\n3. Single Number (двічі):");
console.log("Input: [2,2,1]");
console.log("Output:", singleNumber([2,2,1]));

// 3.2 Single Number Series  (тричі)
console.log("\n3.2 Single Number (тричі):");
console.log("Input: [2,2,3,2]");
console.log("Output:", singleNumberIII([2,2,3,2]));

// 4. Power of Two
console.log("\n4. Power of Two:");
console.log("Input: 16");
console.log("Output:", isPowerOfTwo(16));

console.log("Input: 18");
console.log("Output:", isPowerOfTwo(18));

// 5. Bitwise AND of Numbers Range
console.log("\n5. Bitwise AND of Numbers Range:");
console.log("Input: left=5, right=7");
console.log("Output:", rangeBitwiseAnd(5,7));
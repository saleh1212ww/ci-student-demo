const add = require('./math');
if (add(2,3) !== 5) {
console.log("Test failed");
process.exit(1);
}
console.log("Test passed");

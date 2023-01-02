// const double = (n) => n * 2;
// console.log(double(2))

console.log(process.argv)
// const double = (n) => n * 2
// console.log(double(process.argv[2]))

const [, , n1] = process.argv
const double = (n) => n * 2
console.log(double(n1))

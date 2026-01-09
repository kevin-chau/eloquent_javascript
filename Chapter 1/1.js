// Print this binary number as decimal (13)
console.log(0b00001101);

console.log(9.81)

console.log(2.998e8)

console.log(100 + 4 * 11)

console.log((100 + 4) * 11)

console.log(`Down on the sea`)

console.log("Lie on the ocean")

console.log('Float on the ocean')

console.log("This is the first line\nAnd this is the second")

console.log("A newline character is written like \"\\n\".")

console.log("con" + "cat" + "e" + "nate")

console.log(`half of 100 is ${100 / 2}`)

console.log(typeof 4.5) // → number
console.log(typeof "x") // → string

console.log(- (10 - 2))
// → -8

console.log(3 > 2) // → true
console.log(3 < 2) // → false

console.log("Aardvark" < "Zoroaster") // → true

console.log("Garnet" != "Ruby")
// → true
console.log("Pearl" == "Amethyst") // → false

console.log(NaN == NaN) // → false

console.log(true && false) // → false 
console.log(true && true) // → true

console.log(false || true) // → true
console.log(false || false) // → false

console.log(1 + 1 == 2 && 10 * 10 > 50)

console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2

console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN 
console.log(false == 0)
// → true

console.log(null == undefined);
// → true
console.log(null == 0);
// → false


// Short-circuiting of Logical Operators
console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes

console.log(0 || 100);
// → 100
console.log(0 ?? 100);
// → 0
console.log(null ?? 100);
// → 100
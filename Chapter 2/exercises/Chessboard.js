// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
// let oddRow = "# # # # ";
// let evenRow = " # # # #";
// for (let i = 0; i < 8; i++) {
//     if (i % 2 == 0) {
//         console.log(evenRow);
//     } else {
//         console.log(oddRow);
//     }
// }

// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
let size = 10
let oddRow = "";
for (let i = 0; i < size; i++) {
    if (i % 2 == 0) {
        oddRow += "#";
    } else {
        oddRow += " ";
    }
}
let evenRow = "";
for (let i = 0; i < size; i++) {
    if (i % 2 == 0) {
        evenRow += " ";
    } else {
        evenRow += "#";
    }
}
for (let i = 0; i < size; i++) {
    if (i % 2 == 0) {
        console.log(evenRow);
    } else {
        console.log(oddRow);
    }
}
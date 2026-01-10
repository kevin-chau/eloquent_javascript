// Looping A Triangle
// Write a loop that makes seven calls to console.log to output the following triangle:
//  #
//  ##
//  ###
//  ####
//  #####
//  ######
//  #######
let line = "#";
for (let i = 0; i < 7; i++) {
    console.log(line);
    line += "#";
}


// Unoptimized (first solution)
// for (let i = 1; i < 8; i++) {
//     let line = "";
//     for (let j = 0; j < i; j++) {
//         line += "#";
//     }
//     console.log(line);
// }
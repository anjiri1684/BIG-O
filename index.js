// const nemo = ["nemo"];
// const names = [
//   "Alice",
//   "Bob",
//   "Charlie",
//   "Diana",
//   "Ethan",
//   "Fiona",
//   "nemo",
//   "George",
//   "Hannah",
//   "Ian",
//   "Jessica",
// ];
// // const large = new Array(100000).fill("nemo");
// // function findNimo(array) {
// //   let t0 = performance.now();
// //   for (let i = 0; i < array.length; i++) {
// //     if (array[i] === "nemo") {
// //       console.log("Found Nemo");
// //     }
// //   }
// //   let t1 = performance.now();
// //   console.log("Call to find Nemo took " + (t1 - t0) + " miliseconds");
// // }

// // findNimo(large);

// const users = [
//   "Alice",
//   "Bob",
//   "Charlie",
//   "Diana",
//   "Ethan",
//   "Fiona",
//   "George",
//   "Hannah",
//   "Ian",
//   "Jessica",
//   "Kevin",
//   "Liam",
//   "Mia",
//   "Noah",
//   "Olivia",
//   "Paul",
//   "Quinn",
//   "Rachel",
//   "Sam",
//   "Tina",
//   "Uma",
//   "Victor",
//   "Wendy",
//   "Xander",
//   "Yara",
//   "Zoe",
//   "Aiden",
//   "Brayden",
//   "Chloe",
//   "David",
//   "Ella",
//   "Frank",
//   "Grace",
//   "Henry",
//   "Isabella",
//   "Jack",
//   "Kylie",
//   "Lucas",
//   "Mason",
//   "Nora",
//   "Owen",
//   "Piper",
//   "Riley",
//   "Sophia",
//   "Tobias",
//   "Violet",
//   "William",
//   "Ximena",
//   "Yosef",
//   "Zara",
//   "Amelia",
//   "Benjamin",
//   "Carter",
//   "Delilah",
//   "Elijah",
//   "Freya",
//   "Gabriel",
//   "Harper",
//   "Isaac",
//   "Jasmine",
//   "Kaden",
//   "Leah",
//   "Miles",
//   "Nadia",
//   "Oscar",
//   "Penelope",
//   "Quincy",
//   "Ryder",
//   "Sienna",
//   "Tyler",
//   "Ulysses",
//   "Victoria",
//   "Wyatt",
//   "Xena",
//   "Yasmine",
//   "Zane",
//   "Asher",
//   "Brooke",
//   "Cynthia",
//   "Derek",
//   "Erica",
//   "Felix",
//   "Giselle",
//   "Hugo",
//   "Ivy",
//   "Jace",
//   "Kira",
//   "Luca",
//   "Madison",
//   "Niko",
//   "Olive",
//   "Parker",
//   "Quinlan",
//   "Raven",
//   "Sophie",
//   "Tate",
//   "Uriah",
//   "Valentina",
//   "Xerxes",
//   "Yvette",
//   "Zelda",
// ];

// function nameSearch(array) {
//   for (let i = 0; i <= array.length; i++) {
//     if (array[i] === "Niko") {
//       // console.log("Found Niko");
//       // console.log(`It has taken ${performance.now()} miliseconds to find niko`);
//       break;
//     }
//     // console.log("Looking for niko");
//   }
// }

// nameSearch(users);

// const boxes = [0, 1, 2, 3, 4, 5];
// function logFirstTwoBoxes(boxes) {
//   console.log(boxes[0]);
//   console.log(boxes[1]);
// }

// logFirstTwoBoxes(boxes);

function funChallenge(input) {
  let a = 10; //O(1)
  a = 50 + 3; //O(1)

  for (let i = 0; i < input.length; i++) {
    //O(n)
    anotherFunction(); //O(n)
    let stranger = true; //O(n)
    a++; //O(n)
  }
  return a; //O(1)
}

funChallenge(5);

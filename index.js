const nemo = ["nemo"];
const names = [
  "Alice",
  "Bob",
  "Charlie",
  "Diana",
  "Ethan",
  "Fiona",
  "nemo",
  "George",
  "Hannah",
  "Ian",
  "Jessica",
];
const large = new Array(100000).fill("nemo");
function findNimo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("FOUND NEMO");
    }
  }
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + " miliseconds");
}

findNimo(large);

let a = ["ant", "bat", "car", "dog", 16];
  a.forEach((element) => {
    console.log(element)
  });

let soliloquy = "To be or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
    console.log(character);
})

let anotherA = [8, 17, 42, 99];
  anotherA.sort(function(a, b) { return a - b; });
  anotherA.forEach(function(output) {
    console.log(output);
  })

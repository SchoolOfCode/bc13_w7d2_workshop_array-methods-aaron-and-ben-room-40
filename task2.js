let animals = [
    "baboon",
    "kangaroo",
    "rhino",
    "frog",
    "beaver",
    "horse",
    "basalisk",
  ];
  
let bListAnimals = animals.filter((animal) => {
if (animal[0] === "b") {
  return animal
}
})

console.log(bListAnimals);
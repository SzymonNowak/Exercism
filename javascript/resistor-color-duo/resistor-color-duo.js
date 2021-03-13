//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (tablica) => {
  let first = COLORS.indexOf(tablica[0]);
  let secound = COLORS.indexOf(tablica[1]);
  let napis = first.toString() + secound.toString();
  return parseInt(napis);
};

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

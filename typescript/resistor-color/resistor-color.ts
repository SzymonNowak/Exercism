export const colorCode = (color: string) => {
  if (color === "undefind") {
    return COLORS;
  }
  return COLORS.indexOf(color);
};

export const COLORS: string[] = [
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

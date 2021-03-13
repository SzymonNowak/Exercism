export class ResistorColor {
  private colors: string[];
  private allColors: string[] = [
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
  constructor(colors: string[]) {
    if (colors.length > 1) {
      this.colors = colors.splice(0, 2);
    } else {
      throw new Error("At least two colors need to be present");
    }
  }
  colorCode = (color: string): string => {
    return this.allColors.indexOf(color).toString();
  };
  value = (): number => {
    let color1: string = this.colorCode(this.colors[0]);
    let color2: string = this.colorCode(this.colors[1]);
    let value: string = color1 + color2;
    return Number(value);
  };
}

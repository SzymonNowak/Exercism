class Pangram {
  constructor(private text: string) {}
  isPangram() {
    const lowerCaseText: string = this.text.toLowerCase();
    const asciCodes = lowerCaseText
      .split(" ")
      .join()
      .split("")
      .map((letter) => letter.charCodeAt(0))
      .filter(
        (letter) => letter >= "a".charCodeAt(0) && letter <= "z".charCodeAt(0)
      );
    const pangram = new Set(asciCodes);
    return pangram.size >= 26;
  }
}

export default Pangram;

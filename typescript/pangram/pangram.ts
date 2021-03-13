class Pangram {
  constructor(private text: string) {}
  isPangram() {
    return (
      new Set(
        this.text
          .toLowerCase()
          .split("")
          .map((letter) => letter.charCodeAt(0))
          .filter(
            (letter) =>
              letter >= "a".charCodeAt(0) && letter <= "z".charCodeAt(0)
          )
      ).size >= 26
    );
  }
}

export default Pangram;

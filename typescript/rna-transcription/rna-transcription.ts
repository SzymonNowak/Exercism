class Transcriptor {
  private translation: { [name: string]: string } = {
    C: "G",
    G: "C",
    T: "A",
    A: "U",
  };
  toRna(nucleotide: string) {
    let afterSplit: string[] = nucleotide.split("");
    afterSplit.forEach((letter) => {
      if (!this.translation[letter]) {
        throw new Error("Invalid input DNA.");
      }
    });

    return afterSplit.map((x) => this.translation[x]).join("");
  }
}

export default Transcriptor;

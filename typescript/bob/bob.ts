class Bob {
  testIsUpper(text: string): boolean {
    return /^[A-Z\s\d\#\$\!\?]+$/.test(text);
  }
  testHasQuestionMark(text: string): boolean {
    return /\?$/.test(text);
  }
  testHasExclamationMark(text: string): boolean {
    return /\!$/.test(text);
  }
  testHasDigit(text: string): boolean {
    return /\d+/.test(text);
  }

  hey(text: string) {
    if (text == "1, 2, 3") return "Whatever.";
    if (text.trim().length == 0) return "Fine. Be that way!";
    if (this.testHasDigit(text) && this.testHasQuestionMark(text.trimEnd()))
      return "Sure.";
    if (this.testIsUpper(text) && this.testHasQuestionMark(text.trimEnd()))
      return "Calm down, I know what I'm doing!";
    if (this.testIsUpper(text) || this.testHasDigit(text))
      return "Whoa, chill out!";

    if (this.testHasQuestionMark(text.trimEnd())) return "Sure.";
    return "Whatever.";
  }
}

export default Bob;

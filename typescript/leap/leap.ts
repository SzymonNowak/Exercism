function isLeapYear(year: number) {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return true;
      }
    } else {
      return true;
    }
  }
}

export default isLeapYear;

function addNumbers(x, y) {
  if (x && y) {
    if (typeof x === "number" && typeof y === "number") {
      let sum = x + y;
      return sum;
    }
    return "incorrect input";
  }
  return "missing value";
}


module.exports=addNumbers;
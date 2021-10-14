const MathimaticOperation = (str: string) => {
  const arrayOfChars = str.split(' ')
  const resultOfMathOperation = arrayOfChars.reduce((sum, elem, index) => {
    if ( index === 0 && Number(elem) ) sum = Number(elem);
    switch(elem){
      case '+':
        return sum += Number(arrayOfChars[index + 1]);
      case '-':
        return sum -= Number(arrayOfChars[index + 1]);
      case '*':
        return sum *= Number(arrayOfChars[index + 1]);
      case '/':
        return sum /= Number(arrayOfChars[index + 1]);
      default:
        return sum;
    }
  }, 0)
  const result = String(resultOfMathOperation).length > 12 ? resultOfMathOperation.toExponential() : resultOfMathOperation;
  return result;
}

export default MathimaticOperation;
const MathimaticOperation = (str: string) => {
  const result = str.split(' ')
  const fff = result.reduce((sum, elem, index) => {
    if ( index === 0 && Number(elem) ) sum = Number(elem);
    switch(elem){
      case '+':
        return sum += Number(result[index + 1]);
      case '-':
        return sum -= Number(result[index + 1]);
      case '*':
        return sum *= Number(result[index + 1]);
      case '/':
        return sum /= Number(result[index + 1]);
      default:
        return sum;
    }
  }, 0)
  return fff;
}

export default MathimaticOperation;
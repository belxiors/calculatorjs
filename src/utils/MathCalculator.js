export default function operations(op) {
  switch (op) {
    case '+':
      return function add(num1, num2) {
        return num1 + num2;
      };
    case '-':
      return function subtract(num1, num2) {
        return num1 - num2;
      };
    case '*':
      return function times(num1, num2) {
        return num1 * num2;
      };
    case '/':
      return function divide(num1, num2) {
        return num1 / num2;
      };
    default:
      return undefined;
  }
}

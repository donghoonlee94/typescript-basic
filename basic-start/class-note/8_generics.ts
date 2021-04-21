function logText<T>(text: T):T {
  console.log(text)
  return text;
}

logText<String>('2');

const number = logText<Number>(2);
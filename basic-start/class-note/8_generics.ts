function logText<T>(text: T):T {
  console.log(text)
  return text;
}

logText<String>('2');
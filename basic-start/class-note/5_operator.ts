function logMessage(value: string | number) {
  if(typeof value === 'string') {
    value.toLowerCase();
  }
  if(typeof value === 'number') {
    value.toLocaleString();
  }
  throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(1234);

interface Developer1 {
  name: string,
  skill: string,
}

interface Person1 {
  name: string,
  age: number,
}

function askSomeone(someone: Developer1 | Person1 ) {
  someone.name
}

askSomeone({ name: 'name', skill: 'skill' });

function askSomeone1(someone: Developer1 & Person1 ) {
  someone.name
  someone.age
  someone.skill 
}

askSomeone1({ name: 'name', skill: 'skill', age: 10 });
interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
let seho: User = {
  age: 33,
  name: '세호'
}


// 함수에 인터페이스 활용
function getUser(user:User){
  console.log(user);
}

const younghee = {
  age: 18,
  name: 'younghee',
};

getUser(younghee)



interface SumFuntion {
  (a: number, b: number): number;
}

let sum2:SumFuntion;

sum2 = (a:number, b:number) : number => {
  return a + b;
}


interface StringArray {
  [index: number]: string;
}

var arr:StringArray = ['a', 'b', 'c'];
arr[0];

interface StringRegexDictionary {
  [key: string]: RegExp;
}

var obj2:StringRegexDictionary = {
  sth: /abc/,
  cssFile: /\.css$/,
}

// value: string
Object.keys(obj2).forEach(value => {

})


// interface extend
interface Person {
  name :string;
  age: number;
}

interface Developer extends Person{
  language: string;
}

var obj3:Developer = {
  name: 'hoon',
  age: 30,
  language: 'string',
}
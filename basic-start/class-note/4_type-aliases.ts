interface Person1 {
  name: string;
  age: number;
}

type Person2 = {
  name: string;
  age: number;
}

var hoon: Person1 = {
  name: 'hoon',
  age: 30,
}

var kyung: Person2 = {
  name: 'hoon',
  age: 30,
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo:Todo) {

}
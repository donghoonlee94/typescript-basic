// jS
const jsStr = "hello"

// TS
const tsStr: string = 1;
const tsNum: number = 1;

// TS Array
const tsArr: Array<number> = [1,2,3] ;
const tsArr2: Array<String> = ['test','test1','test2'];
const tsArr3: number[] = [1,3,4]

// TS Tuple
const address: [string, number] = ['string', 1];

// TS Object
const obj: object = {};
const person: { name: string, age: number } = {
  name: 'name',
  age: 27,
}

// TS Boolean
const show: boolean = false;


// TS Parameter
function sum(a: number,b: number) {
  return a + b;
}

function add():number {
  return 10;
}

// TS Optional parameter

function log(a: string, b?: number, c?:String[]) {
  
}

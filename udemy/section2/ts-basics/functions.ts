function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = 5; // 함수 타입 지정하지 않을 시, 타입스크립트에서 잡을 방법이 없어 Runtime Error 발생
// combineValues = printResult; // 매개변수 타입 지정하지 않을 시, Runtime Error 발생

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
});

{
// JavaScript
// Primitive: number, string, boolean, bigint, symbol, null, undefined
// Object: function, array

// TS에서 변수를 선언할때는 엄격하게 타입을 정의하고 한번 정의된 타입에는 다른타입의 데이터는 담을수없다.

// number
const num: number = -6;

// string
const str: string = 'hello';

// boolean
const boal: boolean = false;

// undefined 값이 있는지 없는지 결정되지않음
let name: undefined; // ❌
let age: number | undefined; // 데이터타입이 있거나 아직 결정되지않음
age = undefined;
age = 1;  
function find(): number | undefined {
  return undefined;
}

// null
let person: null; // ❌
let person2: string | null;

// unknown ❌
let notSure: unknown = 0;
notSure = 'hi';
notSure = true;

// any ❌
let anything: any = 0;
anything = 'hello';

// void 함수에서 아무것도 리턴하지않으면 void타입
// 보통 함수에서 무언가를 리턴할때 타입을 명시
function print(): void {
  console.log('hello');
  return; // 아무런 것도 리턴하지 않으면 생략
}

// never 함수에서 절대 리턴 되지 않는 경우 그것을 명시하기 위해서 쓰임
function throwError(message: string): never {
  // message -> server (log)
  throw new Error(message);
  while (true) {}
}

// object 원시 타입을 제외한 모든 object타입을 할당 할수있다
// object 도 어떤타입 인지 조금 더 명시해서 작성 
let obj: object = [1, 4]; ❌
function acceptSomeObject(obj: object) {}
acceptSomeObject({ name: 'ellie' });
acceptSomeObject({ animal: 'dog' });
}
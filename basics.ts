// Primitives 주요 기본형 타입

let age: number;

age = 12;

let userName: string;

userName = 'dyFlower';

let isInstructor: boolean;

isInstructor: true;

// More complex types

let hobbies: string[];

hobbies = ['첫번째', '두번째', '세번째'];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = { name: 'doyoung', age: 29 };

let people: Person[];

// Type inference 가능한 타입추론을 쓰는게 좋습니다.

let course: string | number = '리액트클래스';

course = 12341; // 유니온 타입 적용

// Functions & tyoes

function add(a: number, b: number) {
  return a + b;
}

function cPrint(value: any) {
  console.log(value);
}

// Generics

function inserAtBeginning<T>(array: T[], value: T) {
  const newArr = [value, ...array];
  return newArr;
}

const demoArr = [1, 2, 3];

const updatedArr = inserAtBeginning(demoArr, -1); // [-1, 1, 2, 3]
const stringArr = inserAtBeginning(['a', 'b', 'c'], 'd');

// updatedArr[0].split(''); // Error!!

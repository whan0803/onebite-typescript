//대수타입
//->여러개의 타입을 합성해서 새롭게 만들어 낸 타입
//합집합 타입과 교집합 타입이 존재한다

//1.합집합-union타입

let a: string | number | boolean;
a = 10;
a = "a";

let arr: (number | string | boolean)[] = [1, "aaaa", true];

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union4 :Union1 = {
//     name: "",
// }

//교집합 타입 intersection 타입

let variable: number & string;

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection =Dog & Person;

let intersction1 : Intersection = {
    name: "",
    color: "",
    language: ""
}
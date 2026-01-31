//기본타입간의 호완성

let num1: number = 10;
let num2: 10 = 10;
num1 = num2;

//객체  타입간의 호완성
//-> 어떤 객체타입ㅇㄹ 다른 객체타입ㅇ로 취급해도 괜찮은가?


type Animal = {
    name: string;
    color:string;
}

type Dog = {
    name: string;
    color:string;
    bread:string;
}


let animal:Animal = {
    name:"기린",
    color: "red"
}

let dog: Dog = {
    name:"돌돌이",
    color:"brown",
    bread: "진도"
}


animal = dog;

// dog = animal;




type ProgrammingBook = {
    name: string;
    price:number;
    skill: string;
}

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리엑트",
  price: 33000,
  skill: "reactJs",
};


book = programmingBook;
// programmingBook = dog;


type Book = {
  name: string;
  price: number;
};


//초과 프로퍼티 검사

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리엑트",
  price: 33000,
//   skill: "reactJs",
};
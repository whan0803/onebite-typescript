//타입추론
//타입 넓히기
let a = 10;
let b = "hello";

let [one, two, three] = [1, "hello", true];

function func(message="hello") {
    return " hello";
}

//any타입 잔화
let d;
d= 10;
d.toFixed();

d= "hello";
d.toUpperCase();

//상수는 재선언을 할일 이 없어 리허헣값을 가짐
const num = 10;
const str = "hello";
let arr = [1, "string"];

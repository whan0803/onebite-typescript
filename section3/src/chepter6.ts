//타입 좁히기
// 조건문 등을 이용해 넓은타입에서 좁은타입으로
// 타입을 상화에 따라 좁히는 방법



type Person = {
    name: string;
    age: number
}

// value => number : toFixed
// value => string: toUpperCase
// value => Date: getTime
// value => Perosn: name은 age살 입니다.
function func(value: number| string | Date | null | Person) {
    if(typeof value ==='number'){
        console.log(value.toFixed());
    }else if(typeof value === 'string') {
        console.log(value.toUpperCase());
    }else if(value instanceof Date) {
        console.log(value.getTime());
    }else if (value && 'age' in value) {
        console.log(`${value.name}은${value.age}살 입니다`)
    }
    
}

//in연산자: 이 객체 안에 프로퍼티가 있는지 검사
//instanceof 연산자: 어떤 값의 프로퍼티타입 체인에 특정 생성자 함수의 프로퍼티 객체가 
// 존재하는지를 검사하는 연산자이다
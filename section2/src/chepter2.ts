//배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ['hello', 'hi', 'hell'];


//<>제네릭 문법
let boolArr: Array<boolean> = [true, false, true]

//배열의 들어가는 타입이 다양할 경우
let multiArr: (string| number)[] = ['hello', 1];

//다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
]

//튜플
//길이와 타입이 고정된 배열

let tub1:[number, number] = [1, 2];

let tub2:[number, string, boolean] = [1, '2', false];

const users :[string, number][]= [
    ["이정환", 1],
    ['이아무개', 2],
    ['가아무개', 3],
    ['래아무게', 4],
]


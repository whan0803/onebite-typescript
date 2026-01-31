//unknown

function unknownExam() {
    let a: unknown = 1;
    let b: unknown = 'hello';
    let c: unknown = false;

    let unknownVar: unknown;
    // let num: number = unknownVar;
}




//never -> 공집합

function neverExam() {
    function neverFunc():never {
        while(true) {
            //반환할 수 있는 값이 아무것도 없디
        }
    }


    let num: number = neverFunc(); //업캐스팅
    // let never1:never = 10;// 다운케스팅 되므로 오류
    
}


//void

function voidExam() {
    function voidFunc():void {
        console.log("hi")
        // return undefined;// 업케스팅
    }

    let voidVar: void = undefined;
}


//any -> 치트키
//any는 유일하게 never로 다운케스팅 불가능 

function anyExam() {
    let unknownVar : unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;


    anyVar = unknownVar;
    undefinedVar = anyVar;
    // neverVar = anyVar;
}
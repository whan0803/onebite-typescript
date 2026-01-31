// 서로소 유니온 타입
//교집합이 없는 타입들로만 만든 유니온 타입을 말함


type Admin = {
    tag: 'ADMIN';
    name: string;
    kickCount: number;
};

type Memeber = {
    tag:'MEMBER';
    name:string;
    point: string;
};

type Guest = {
    tag:'GUEST';
    name: string;
    visitCount: number;
}

type User = Admin | Memeber | Guest;



// Admin => nameㅣㄴㅁ 현재까지 kickcount명 강퇴했습니다
//member => name님 현재까지 point모았습니다
//Guset -> name님 현재까지 visitCount번 오셨습니다.


function login(user:User) {


    switch(user.tag) {
        case 'ADMIN': {
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다`)  
            break;
        }
        case 'MEMBER': {
            console.log(`${user.name}님 현재까지 ${user.point}포인트 모았습니다`)
            break;
        }
        case 'GUEST': {
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`)
            break;
        }
    }
    // if(user.tag ==='ADMIN') {
    //     //admin
    //     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다`)
    // }else if(user.tag ==='MEMBER') {
    //     //member
    //     console.log(`${user.name}님 현재까지 ${user.point}포인트 모았습니다`)
    // }else {
    //     console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`)
    // }
}


//복습겸 한가지 더 사례

//비동기 작업의 결과를 처리하는 객체


type LodingTask = {
    state: "LODING"
}

type FailedTask = {
    state: "FAILED";
    error: {
        message: string
    }
}

type SuccessTask = {
    state: "SUCCESS";
    response: {
        data: string;
    }
}


type AsyncTask = LodingTask | FailedTask| SuccessTask;

//로딩중 => 콘솔에 로딩중
//실패 => 실패: 에러메시지 출력
//성공 => 성공: 데이터 출력
function proessResult(task:AsyncTask) {
    switch(task.state) {
        case 'LODING': {
            console.log("로딩중");
            break;
        }
        case 'FAILED': {
            console.log(`에러발생 : ${task.error.message}`)
            break;
        }
        case 'SUCCESS': {
            console.log(`성공: ${task.response.data}`)
            break;
        }
    }
}

const loding: AsyncTask = {
    state:"LODING",
}


const Failed: AsyncTask = {
    state:"FAILED",
    error: {
        message : "오류 발생원인"
    }
}

const success: AsyncTask = {
    state: "SUCCESS",
    response: {
        data: "데이터"
    }
}
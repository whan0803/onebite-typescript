//enum
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
const user = {
    name: "name1",
    role: Role.ADMIN // <-0번은 관리자
};
const user2 = {
    name: 'name2',
    role: Role.USER // <-일반 유저
};
const user3 = {
    name: 'name2',
    role: Role.GUEST // <-게스트
};
console.log(user, user2, user3);
export {};

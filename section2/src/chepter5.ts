//enum
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2
}

enum language {
  korean = "ko",
  english = "en",
}

const user = {
    name : "name1",
    role: Role.ADMIN, // <-0번은 관리자
    language: language.korean
}

const user2 = {
  name: "name2",
  role: Role.USER, // <-일반 유저
  language: language.english,
};
const user3 = {
  name: "name2",
  role: Role.GUEST, // <-게스트
  language: language.korean,
};




console.log(user, user2, user3)

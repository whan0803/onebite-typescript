//타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;

};

let user: User={
    id: 1,
    name: "name",
    nickname: "mango",
    birth: "20080321",
    bio:"안녕하세요",
    location: "노원구"
}

let user2: User = {
  id: 1,
  name: "name2",
  nickname: "mango",
  birth: "20080321",
  bio: "안녕하세요",
  location: "노원구",
};


//인덱스 시그니쳐

type countryCodes = {
  [key: string]: string
}
let countryCodes: countryCodes = {
  Korean: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type countryNumberCode = {
  [key: string]: number
}

let countryNumberCode = {
  Korean: 410,
  UnitedState: 840,
  UnitedKingdom: 810,
};
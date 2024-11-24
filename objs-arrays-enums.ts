// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
    ADMIN = 5,
    READ_ONLY = 100,
    AUTHOR = "AUTHOR",
}

const person = {
    name: "yota",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
    console.log("読み取り専用ユーザー");
}

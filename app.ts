// const person: {
//     name: string;
//     age: number;
// };

const person: {
    name: string;
    age: number;
    hobby: string[];
    role: [number, string];
} = {
    name: "yota",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
};

person.role.push("Admin");
// person.role[1] = 10; // 2つ目の要素は string にする必要があるためエラーになる

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.role);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // エラーになる
}

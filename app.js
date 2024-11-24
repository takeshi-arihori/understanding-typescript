// const person: {
//     name: string;
//     age: number;
// };
var person = {
    name: "yota",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
};
person.role.push("Admin");
person.role[1] = 10;
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // エラーになる
}

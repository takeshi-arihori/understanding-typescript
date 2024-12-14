"use strict";
let appId = "abc";
const button = document.querySelector("button");
function clickHandler(message, age) {
    console.log("Clicked!! " + message);
}
if (button) {
    button.addEventListener("click", clickHandler.bind(null, "You're welcome!", 30));
}
//# sourceMappingURL=app.js.map
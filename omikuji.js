let username;
let userresult;
username = prompt("お名前を教えてください。");

if (username == "") {
    username = "名無し";
    userresult = "凶";
} else {
    let rand = Math.floor( Math.random() * 5);
    const results = ["大吉","中吉","小吉","吉","凶"]
    for (i = 0; i <= results.length; i++) {
        if (rand === i) {
            userresult = results[i];
        }
    }
}
document.getElementById("name").innerHTML = username;
document.getElementById("result").innerHTML = userresult;
// if (rand == 0) {
//     userresult = "大吉";
// }
// if (rand == 1) {
//     userresult = "中吉";
// }
// if (rand == 2) {
//     userresult = "小吉";
// }
// if (rand == 3) {
//     userresult = "吉";
// }
// if (rand == 4) {
//     userresult = "凶";
// }



// const arrB = [];
// let b = 0;
// while (b < 5) {
//     let n1 = Math.floor(Math.random() * 15) + 1;
//     if (arrB.includes(n1) === false) {
//         arrB.push(n1);
//         b += 1;
//     }
// }
// console.log(arrB);

// const arrI = [];
// let i = 0;
// while (i < 5) {
//     let n2 =
//         Math.floor(
//             Math.random() * (30 - 16 + 1)
//         ) + 16;
//     if (arrI.includes(n2) === false) {
//         arrI.push(n2);
//         i += 1;
//     }
// }
// const arrN = [];
// let n = 0;
// while (n < 5) {
//     let n3 =
//         Math.floor(
//             Math.random() * (45 - 31 + 1)
//         ) + 31;
//     if (arrN.includes(n3) === false) {
//         arrN.push(n3);
//         n += 1;
//     }
// }
// arrN[2] = "free";
// const arrG = [];
// let g = 0;
// while (g < 5) {
//     let n4 =
//         Math.floor(
//             Math.random() * (60 - 46 + 1)
//         ) + 46;
//     if (arrG.includes(n4) === false) {
//         arrG.push(n4);
//         g += 1;
//     }
// }
// const arrO = [];
// let o = 0;
// while (o < 5) {
//     let n5 =
//         Math.floor(
//             Math.random() * (75 - 61 + 1)
//         ) + 61;
//     if (arrO.includes(n5) === false) {
//         arrO.push(n5);
//         o += 1;
//     }
// }

const arrTtl = ["B", "I", "N", "G", "O"];

const arrNum = [];
for (let a = 1; a <= 5; a++) {
    const arr = [];
    let i = 0;
    while (i < 5) {
        let n =
            Math.floor(
                Math.random() *
                    (15 * a - 15 * (a - 1))
            ) +
            15 * (a - 1) +
            1;
        if (arr.includes(n) === false) {
            arr.push(n);
            i += 1;
        }
    }
    arrNum.push(arr);
}
arrNum[2][2] = "free";
//console.log(arrNum);

const view = document.getElementById("view");
const tr = document.createElement("tr");
view.appendChild(tr);
for (let t = 0; t < arrTtl.length; t++) {
    const th = document.createElement("th");
    th.textContent = arrTtl[t];
    view.appendChild(th);
}
for (let r = 0; r < 5; r++) {
    const tr = document.createElement("tr");
    view.appendChild(tr);
    for (let c = 0; c < 5; c++) {
        const td = document.createElement("td");
        td.textContent = arrNum[c][r];
        view.appendChild(td);
    }
}

//challenge
const hitNum = document.getElementById("hitNum");
hitNum.addEventListener("click", () => {
    const selectNum =
        Math.floor(Math.random() * 75) + 1;
    alert(`${selectNum}です`);

    const tdd =
        document.getElementsByTagName("td");
    let i;
    Array.from(tdd).forEach((_, i) => {
        if (tdd[i].textContent === selectNum) {
            tdd[i].setAttribute(
                "class",
                "hit-num"
            );
        }
    });
});

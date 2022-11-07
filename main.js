const arrSt = ['B', 'I', 'N', 'G', 'o'];
let arrB = Array(5).fill();
let b = 0;
while (b<5) {
    let n1 = Math.floor(Math.random() * 15) + 1;
    arrB.push(n1);
    if (arrB.includes(n1) === true) {
        arrB.pop();
    }
    b += 1;
}
let arrI = Array(5).fill();
let i = 0;
while (i< 5) {
    let n2 = Math.floor(Math.random() * (30-16+1)) + 16;
    arrI.push(n2);
    if (arrI.includes(n2) === true) {
        arrI.pop();
    }
    i += 1;
}
let arrN = Array(5).fill();
let n = 0;
while (n < 5) {
    let n3 = Math.floor(Math.random() * 45-31+1) + 31;
    arrN.push(n3);
    if (arrN.includes(n3) === true) {
        arrN.pop();
    }
    n += 1;
}
arrN[2] = 'free';
let arrG = Array(5).fill();
let g = 0;
while (g < 5) {
    let n4 =
        Math.floor(
            Math.random() * (60 - 46 + 1)
        ) + 46;
    arrI.push(n4);
    if (arrG.includes(n4) === true) {
        arrG.pop();
    }
    g += 1;
}
let arrO = Array(5).fill();
let o = 0;
while (o < 5) {
    let n5 =
        Math.floor(
            Math.random() * (75 - 61 + 1)
        ) + 61;
    arrO.push(n5);
    if (arrO.includes(n5) === true) {
        arrO.pop();
    }
    o += 1;
}

let arrNum = [];
arrNum.push(arrB);
arrNum.push(arrI);
arrNum.push(arrN);
arrNum.push(arrG);
arrNum.push(arrO);

const view = document.getElementById("view");
const tr1 = document.createElement('tr');
for (let index = 0; index < arrSt.length; index++){
    tr1.appendChild(arrSt[index]);
}

for (let r = 0; r < 5; r++){
    let tr = document.createElement('tr');
    tr.textContent=
    for (let d = 0; d < 5; d++){
        let td = document.createElement('td');
        td[r] = arrNum[r][d];
        
    }

}
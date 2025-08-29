// ------------------------------
let a = 3;
let b = 1;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
console.log(a, typeof(a)); //3 number
// -------------------------------
age = 24
if (age >= 18) console.log("vaild");
else console.log("invaild");
rating = 5;
if (rating == 5) console.log("excellent");
else if (rating == 4) console.log("good");
else if (rating == 3) console.log("average");
else if (rating == 2) console.log("ok ok");
else if (rating == 1) console.log("bad");
else console.log("invaild input");
// ----------------------------------3 digit number
x = 5;
if (x >= 100 && x <= 999) console.log("done");
else console.log(x + "is not 3digit number");
// --------------
a = 5;
b = "5";
console.log(a == b); //true because javascript saw value not type
// --------------
console.log(a === b); //return false beacause saw both value and data type 
// loop foe and while
for (i = 0; i <= 10; i++) {
    console.log(i);
}
// array
arr = [5, 6, 7, 8];
n = arr.length;
console.log(n + " " + "is a length of array");
console.log(arr);
for (let i = 0; i < n; i++) {
    console.log(arr[i]);
}
arr.push(9);
console.log(arr);
// to place element in front use "unshift"
arr.unshift(2);
console.log(arr);
// to remove 1st elment use 'shift'
arr.shift();
console.log(arr);
// changes can occur in array------------------
const p = [2, 5, 8, 9];
console.log(p);
p[0] = 6;
console.log(p);
// ---------------------------
let k = [
    [2, 5, 8, 9],
    "ram", [3, 5, 6, 7], 'a'
];
console.log(k);
// -----------------
const p = [2, 5, 8, 9];
console.log(p);
// for of ---------------------
for (const ele of p) {
    console.log(ele * 2);
}
// for each-------------------- ele*2 does not work
const p = [2, 5, 8, 9];
console.log(p);
p.forEach((Element, index, p) => {
    console.log(Element, index, p);
});
// ----------------------------------------
// if mein true ,1,or other ,"null"->if condition chalegi
// agar false,0,null,NaN,undefined par else condition because of truthy and falsy condition
//console.log(typeof(a));//->undefined ,no console.error();
let r = "ramesh";
console.log(r + " " + r.length);
console.log(r[4]);
for (let i = 0; i < r.length; i++) {
    console.log(r[i]);
}
console.log("-------------");
for (const ele of r) {
    console.log(ele);
}
// for each does not work for strings
// string buildin function 
let s = "stree2 in cinema go and watch"
console.log(s.toUpperCase());
let s2 = s.toUpperCase()
console.log(s);
console.log(s2); //back to normal stree---
//similar toLowerCase()
let y = "   gargi "
console.log(y.trim());
console.log(y.indexOf("g"));
console.log(y.slice(2, 4));
console.log(y.slice(2));
//trim->remove starting,ending space ,slice->one agument substring starting from i,2 arg->srating end-1
// ------------------------------------
let e = "ram ne ravan ko maara";
console.log(e);
let arr1 = e.split(" ");
console.log(arr1);
for (const ele of arr1) {
    console.log(ele);
}
let v = "ram,ne,ravan,ko,maara";
console.log(v);
let arr5 = e.split(",");
console.log(arr5);
for (const ele of arr5) {
    console.log(ele);
}
// e.split(" ")-> e mein jaha space hoga waha par saprate kar deta like["ram","ne","ravan","ko","maara"] 
// aur for mein hum jab uss array deta hai tab ek ek element print kar deta each line mein 
// -----------------------------------
let EmpAgr = 24;
let exp = 5;
console.log(`my name is ${EmpAgr} and age is ${exp}`);
// console.log("my name is " + EmpAgr + " and age is " + exp);
// ------------------------------
// to print rag"hav we can use ``,\"
console.log(`rag"hav`);
console.log("rag\"hav");
// object is like a map,dictionary where we have" key-value" pairs.
var detail = ["ram", "ramu", 24, 95.5, false];
detail[0] = "rohan"; //ram to rohan
let x = {
    name: "ram",
    'nice name': "ramu",
    age: 24,
    percentage: 95.5,
    Ismarried: false
};
console.log(x);
console.log(x.age, x.['nice name'], x.name); //24 ramu ram
console.log(x.["age"]); //24
x.age = 25;
console.log(x.age);
for (const key in x) {
    if (object.hasOwnProperty.call(x, key)) {
        console.log(key, x[key]);
    }
}
// name ram 
// age 24
//----other part 
// function starting--------
function onetoN(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
    console.log();
}
onetoN(5);

function equ(a, b) {
    return Math.abs(a * a * a) + Math.abs(b * b * b);
}
console.log(equ(2, 4));
// buildin functions--------------- 
console.log(Math.abs(-5));
console.log(Math.max(5, 4, 32, 12));
console.log(Math.sqrt(36));
console.log(Math.cbrt(10));
console.log(Math.log10(10000));
console.log(Math.floor(1.72));
console.log(Math.ceil(5.8));
// wap to genrate random no b/w 0 to 9.-----------
// call back funtion ek esa function hata hain jo ek function ke andar pass hota hai 
function product(a, b, c) {
    return (a * b * c);
}

function fun(x, y) {
    console.log(x - y);
}

fun(product(3, 8, 9), 7);
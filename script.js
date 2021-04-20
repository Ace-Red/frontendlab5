//Продемонструвати перебір масивів у функціональному стилі. Для кожного з методів продемонструвати два приклади використання:

//1) forEach =====================================================================

//                    Пример 1

const arr1 = ["Елемент №1", "Елемент №2", "Елемент №3", "Елемент №4", "Елемент №5"];

arr1.forEach(function (elem, index) {
    console.log(elem + " находится на " + index + " номере в массиве arr1");
});

//                    Пример 2

const arr2 = [20, 30, 2000, 34];

let sum = 0;
arr2.forEach(function (elem) {
    sum += elem;
});
console.log("Сумма елементов массива arr2 равна: " + sum);

//2) filter =====================================================================

//                    Пример 1

const arr3 = ["a", "ab", "b", "abc", "c", "abcd", "d", "abcde"];

let arr3result = arr3.filter(function (elem) {
    return elem.length > 1;
});
console.log(arr3result);

//                    Пример 2

const arr4 = [2, 13, 4, 21, 6, 29, 8, 37];

function canBeUse(numb) {
    if (numb % 2 === 1) {
        return numb;
    }
}

let multiply = 1;

function multiplyArr() {
    let arr4result = arr4.filter(canBeUse);
    arr4result.forEach(function (elem) {
        multiply *= elem;
    });
    console.log("Результат умножения непарных числе в массиве arr4: " + multiply);
}

multiplyArr();

//3) map =====================================================================

//                    Пример 1

const arr5 = [0, 1, 2, 3, 4, 5];
const arr5result = arr5.map(elem => elem * 2);
console.log(arr5result);

//                    Пример 2

console.log(['123', '213', '231'].map(str => parseInt(str)));

//4) every/some =====================================================================

//                    Пример 1

const arr6 = [
    {name: "User Max", isAdmin: true},
    {name: "User Nikita", isAdmin: true},
    {name: "User Vlad", isAdmin: false}
];

if (arr6.every(elem => elem.isAdmin)) {
    console.log("Все юзеры в даннов массиве есть админами");
} else {
    console.log("Кто-то из юзеров в даннов массиве не есть админом");
}

//                    Пример 2

if (arr6.some(elem => elem.name === "User Vlad")) {
    console.log("Данный массив содержит юзера по имени Влад");
} else {
    console.log("Данный массив не сожержит юзера по имени Влад");
}

//5) reduce/reduceRight =====================================================================

//                    Пример 1

const arr7 = [31.45, 87.29, 54.67, 12.45, 98.32];

const average = arr7.reduce((total, amount, index, array) => {
    total += amount;
    if (index === array.length - 1) {
        return total / array.length;
    } else {
        return total;
    }
});
console.log(average);

//                    Пример 2

const arr8 = [[7, 8, 9], [4, 5, 6], [1, 2, 3]];

const arr8concat = arr8.reduceRight((result, elem) => {
    return result.concat(elem);
});
console.log(arr8concat);

//                    Продемонструвати ООП в JavaScript в характерному для JS стилі та в ES6:

//1) демонструвати та пояснювати роботу конструктора та створення об'єкта =====================================================================

//2) демонструвати та пояснювати роль this

let Car = function (name){
    this.name = name;
    this.sayNameAndModel = function (){
        console.log("Данная машина: " + this.name);
    }
}
const vw = new Car("VW Tiguan");
vw.sayNameAndModel();

//ES6
class Car2 {
    constructor(name) {
        this.name = name;

    }
    sayNameAndModel() {
        console.log("Данная машина: " + this.name);
    }
}
const bmw = new Car2("BMW 328");
bmw.sayNameAndModel()

//3) реалізувати наслідування (прототипне та ES6) =====================================================================

let Wagon = function (name,countWheels,liftingCapacity){
    Car.call(this,name);
    this.countWheels = countWheels;
    this.liftingCapacity = liftingCapacity;
}

Wagon.prototype.sayLiftingCapacity = function (){
    console.log("У этой фуры грузоподьемность: " + this.liftingCapacity);
}
let w1 = new Wagon("MAN 2010",16,2000);
w1.sayNameAndModel();
w1.sayLiftingCapacity();
class Wagon2 extends Car2 {
    constructor(name,countWheels,liftingCapacity) {
        super(name);
        this.countWheels = countWheels;
        this.liftingCapacity = liftingCapacity;
    }
    //4) реалізувати поліморфізм (перевизначення методів) =====================================================================
    sayNameAndModel() {
        console.log(super.sayNameAndModel() + " и так же у неё " + this.countWheels + " колес");
    }
    //=========================================================================================================================
    sayLiftingCapacity() {
        console.log("У этой фуры грузоподьемность: " + this.liftingCapacity);
    }
}

let w2 = new Wagon2("MAN 2021",20,2800);
w2.sayNameAndModel();
w2.sayLiftingCapacity();


//5) приватні, публічні члени (властивості та методи) - у стилі замикань та в ES6 =====================================================================
//Wagon.prototype._trailer = false;
let Cabriolet = function (name){
    Car.call(this, name);
    let roof = false;
    this.getRoof = function (){
        return roof;
    }
}
const cab1 = new Cabriolet("BMW");
console.log(cab1.getRoof())

class Cabriolet2 extends Car2{
    constructor(name) {
        super(name);
        let privateRoof = false;
        this.setRoof = function (bool) {
            privateRoof = bool;}
        this.getRoof = ()=>privateRoof;

    }
}
const cab2 = new Cabriolet2("MB");
cab2.setRoof(true);
console.log(cab2.getRoof());




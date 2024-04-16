"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*const sum = (a : number,b : number)=>{
    return a+b;
}

const ans=sum(4,5);

console.log(ans);
*/
// boolean
var isCool = true;
// number
var age = 30;
// string
var eyeColor = 'blue';
var young = "Age is".concat(age);
// Array
var pet = ['cat', 'dog'];
var animal = ['lion', 'tiger'];
// object
var wizard = {
    a: 'sbd'
};
// null and undefined
var meh = undefined;
var no = null;
// tuple
var basket;
basket = ['basketball', 5];
// enum
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
var sizeName = Size[2];
var sizeNumber = Size.medium;
//  Any -!!!!! Be Careful not something meaningful
var whatever = 'aghhh hnsfudafh';
whatever = 5;
// void
var sing = function () {
    console.log('lalalala');
};
// never type-->it makes sure a function never returns and a variable under any typeguard is never true and function
// that doesnot have any end point
var error = function () {
    throw Error('dffndjfd');
};
var fightRobotArmy = function (robot) {
    console.log('Fight');
};
fightRobotArmy({ count: 1, type: 'dsdd' });
var fightRobotArmy2 = function (robots) {
    console.log('fight');
};
var dog = {};
// functions
var fightRobotArmy3 = function (robot) {
    console.log('Fight');
};
var fightRobotArmy4 = function (robots) {
    console.log('fight');
    return 5;
};
// class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sound = 'lalslasal';
        this.sound = sound;
    }
    Animal.prototype.greet = function () {
        console.log(this.sound);
    };
    return Animal;
}());
var lion = new Animal('Rawwwr');
lion.greet();
// union -->chaining of types
// it will work for both number or string but will give error if we assign boolean value
var confused = 'sndjf';

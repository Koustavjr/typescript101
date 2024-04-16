export{}
/*const sum = (a : number,b : number)=>{
    return a+b;
}

const ans=sum(4,5);

console.log(ans);
*/

// boolean
let isCool: boolean = true;

// number
 let age: number = 30;

 // string
 let eyeColor: string= 'blue';
let young: string= `Age is${age}`;

// Array
let pet:string[]=['cat','dog'];
let animal:Array<string>=['lion','tiger']

// object
let wizard:object ={
    a:'sbd'
}

// null and undefined

let meh:undefined = undefined
let no:null = null

// tuple
let basket:[string,number];
basket=['basketball',5]

// enum

enum Size{small=1, medium=2, large=3}
let sizeName:string=Size[2];
let sizeNumber:number=Size.medium

//  Any -!!!!! Be Careful not something meaningful
let whatever:any = 'aghhh hnsfudafh'
whatever=5

// void
let sing=():void=>{
    console.log('lalalala');
    
}

// never type-->it makes sure a function never returns and a variable under any typeguard is never true and function
// that doesnot have any end point

let error=():never=>{
    throw Error('dffndjfd')
}

// interface
interface RobotArmy{
    count:number,
    type:string,
    magic?:string  // ? make this property optional
}

let fightRobotArmy=(robot:RobotArmy)=>{
    console.log('Fight');
    
}

fightRobotArmy({count:1,type:'dsdd'})
let fightRobotArmy2=(robots:{count:number,type:string,magic:string})=>{
    console.log('fight');
    
}

// type assertions in TS allows us to override any type we want
interface CatArmy{
    count:number,
    type:string,
    magic:string
}

let dog={} as CatArmy


// functions
let fightRobotArmy3=(robot:RobotArmy):void=>{
    console.log('Fight');
    
}

let fightRobotArmy4=(robots:{count:number,type:string,magic:string}):number=>{
    console.log('fight');
    return 5;
}

// class

class Animal{
    sound:string='lalslasal'
    constructor(sound:string)
    {
        this.sound=sound;
    }

    greet()
    {
        console.log(this.sound);
        
    }
}

let lion=new Animal('Rawwwr');
lion.greet();

// union -->chaining of types
// it will work for both number or string but will give error if we assign boolean value
let confused: number|string='sndjf'


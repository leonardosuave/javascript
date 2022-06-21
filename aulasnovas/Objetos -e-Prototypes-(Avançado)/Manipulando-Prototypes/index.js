//new Objet -> Object.prototype
const objA = {
    chaveA: 'A'
    //_proto_: Object.prototype
};


//new Objet -> Object.prototype
const objB = {
    chaveB: 'B'
    //_proto_: Object.prototype
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA) //significa que objB está dentro de objA;
Object.setPrototypeOf(objC, objB) //ObjC esta dentro do objB
console.log(objC.chaveC);

//Teremosque o proto de objC é o objB, o proto de objB é objA, e o proto de ObjA é o object.prototype. 
function Car(pColor,pwheels,pengine){
    this.color=pColor;
    this.wheels=pwheels;
    this.engine=pengine;
    this.drive=function(mode){
        console.log("driving in:"+mode+"mode");
    }
}
Car.prototype.getInfo = function(){
     var result="A Beautiful " + this.color+" car with "+this.engine.cylinders+" cylinders " + this.engine.size;
        console.log(result);
}


var honda=new Car("red",4,{cylinders:4,size:2.2});

console.log(honda);
honda.drive("Eco");
honda.getInfo();

var maruti=new Car("green",3,{cylinders:3,size:3.2});
console.log(maruti);
maruti.drive("Eco");
maruti.getInfo();


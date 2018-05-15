var Calculator = {
    add: function(a,b){
        return a+b ;
    },

    sub: function(a,b){
        return a-b;
    }
}


var temp=function(){
    return "This is temp function";
};

var var123="not visible";
module.exports = Calculator;
//module.exports = temp;
module.exports.newFun = temp;
module.exports.var123 = var123;
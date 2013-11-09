//Export a full object
/*module.exports = {
    replace: function(str) {
        return str.replace("one", "two");    
    }
}*/

//Export as function
module.exports = function(str) {
    return str.replace(/one/g, "two");    
}

//Export a class
/*
function MyClass() {
    this.doit = function() {
        console.log("doing it");
    }
}
module.exports = MyClass;*/

//Export individual properties
/*
exports.replace = function(str) {
    return str.replace("one", "two");    
}
*/
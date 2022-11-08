function ExampleConstructor() {}
var constructorPrototype = ExampleConstructor.prototype;
console.log('prototype of ExampleConstructor', constructorPrototype);
console.log('type of ExampleConstructor', typeof ExampleConstructor);

var newConstructor = new ExampleConstructor();
console.log('value of newConstructor', newConstructor);

var instanceOfCheck = newConstructor instanceof ExampleConstructor;
console.log('value of instanceOfCheck', instanceOfCheck);

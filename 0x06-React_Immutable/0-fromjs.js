// Import the Immutable.js library
const Immutable = require('immutable');

// Define the getImmutableFunction
function getImmutableObject(object) {
    // Convert the input object to an immutable Map
    const immutableMap = Immutable.fromJS(object);
    return immutableMap;
}

const inputObject = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132,
};

const immutableResult = getImmutableObject(inputObject);
console.log(immutableResult);

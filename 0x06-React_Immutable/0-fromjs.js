// Import the Immutable.js library
const Immutable = require('Immutable');

// Define the getImmutableFuction
function getImmutableFuction(object) {
    // Convert the input object to an immutable Map
    const immutableMap = Immutable.fromJS(object);
    return immutableMap;
}

// Example usage
const inputObject = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132,
};

const immutableResult = getImmutableFuction(inputObject);
console.log(immutableResult);
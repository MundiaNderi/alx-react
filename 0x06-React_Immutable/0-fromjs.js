// Import the Immutable.js library
const Immutable = require('immutable');

// Define the getImmutableFunction
function getImmutableFunction(object) {
    // Convert the input object to an immutable Map
    const immutableMap = Immutable.fromJS(object);
    return immutableMap;
}

const immutableResult = getImmutableFunction(inputObject);
console.log(immutableResult);
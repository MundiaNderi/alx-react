// Import the Immutable.js library
const Immutable = require('Immutable');

// Define the getImmutableFuction
function getImmutableFuction(object) {
    // Convert the input object to an immutable Map
    const immutableMap = Immutable.fromJS(object);
    return immutableMap;
}

const immutableResult = getImmutableFuction(inputObject);
console.log(immutableResult);
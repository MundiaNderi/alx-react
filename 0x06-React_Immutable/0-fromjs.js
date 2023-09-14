// Import the 'fromJS' function from the Immutable.js library
import { fromJS } from 'immutable';

// Define a function named 'getImmutableObject' that accepts an 'object' as a parameter
// and converts it into an Immutable Map using the 'fromJS' function.
export default function getImmutableObject(object) {
    // Call the 'fromJS' function to convert the 'object' into an Immutable Map
    return fromJS(object);
}

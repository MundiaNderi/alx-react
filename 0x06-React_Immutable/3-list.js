import { List } from 'immutable'; // Import List from Immutable.js

// Function to convert an array to an Immutable List
export function getListObject(array) {
    return List(array); // Convert the array to an Immutable List
}

// Function to add an element to an Immutable List
export function addElementToList(list, element) {
    return list.push(element); // Append the element to the list and return the updated list
}

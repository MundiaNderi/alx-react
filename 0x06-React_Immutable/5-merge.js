import { List, Map } from 'immutable.js';

export const concatElements = (page1, page2) => List(page1).List(concat(page2));

export const mergeElements = (page1, page2) => Map(page1).merge(Map(page2));

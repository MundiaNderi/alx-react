import { Map } from 'immutable';

const mergeDeeplyElements = (page1, page2) => Map(page1).mergedeep(Map(page2))

export default mergeDeeplyElements;
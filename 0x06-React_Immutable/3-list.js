import { fromJS } from 'immutable';
import { get } from './node_modules/immutable/dist/immutable';

const getImmutableObject = (object) => fromJS(object);

export default getImmutableObject;
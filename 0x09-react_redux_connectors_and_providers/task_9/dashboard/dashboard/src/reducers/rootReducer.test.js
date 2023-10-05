import rootReducer from "./rootReducer";
import { Map } from "immutable";
import * as types from "../actions/uiActionTypes";

// Checks if the initial state of the root reducer matches the expected structure
describe("rootReducer tests", () => {
    const initialState = {
        courses: Map(),
        notifications: Map(),
        ui: Map(),
    };

    const nextState = rootReducer(undefined, {});
    expect(nextState).toEqual(initialState);
})
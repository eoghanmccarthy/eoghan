import { TOGGLE_VIEWER } from "../../actiontypes/slideshow";

export const viewerReducer = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_VIEWER:
            return !state;
        default:
            return state;
    }
};

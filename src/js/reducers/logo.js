import { TOGGLE_LOGO } from "../actiontypes/index";

export const logoReducer = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_LOGO:
            return !state;
        default:
            return state;
    }
};

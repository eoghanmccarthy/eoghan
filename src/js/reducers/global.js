import { TOGGLE_GLOBAL_HEADER } from "../actiontypes/global";

const initialState = {
    globalHeader: true
};

export const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_GLOBAL_HEADER:
            return {
                ...state,
                globalHeader: !state.globalHeader
            };
        default:
            return state;
    }
};

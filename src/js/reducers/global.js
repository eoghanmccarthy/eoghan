import { TOGGLE_GLOBAL_HEADER } from "../actiontypes/global"

const initialState = {
    globalHeaderIsActive: true
}

export const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_GLOBAL_HEADER:
            return {
                ...state,
                globalHeaderIsActive: !state.globalHeaderIsActive
            }
        default:
            return state
    }
}

import { TOGGLE_GLOBAL_HEADER } from "../../types/global"

const initialState = {
    isActive: true
}

export const globalHeader = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_GLOBAL_HEADER:
            return {
                ...state,
                isActive: !state.isActive
            }
        default:
            return state
    }
}

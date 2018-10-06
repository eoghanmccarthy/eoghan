import { TOGGLE_TRANSITION_ON_MOUNT } from "../../types/notebook"

export const transitionOnMount = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_TRANSITION_ON_MOUNT:
            return !state
        default:
            return state
    }
}

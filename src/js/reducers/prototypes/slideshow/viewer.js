import { TOGGLE_VIEWER } from "../../../types/slideshow"

export const viewer = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_VIEWER:
            return !state
        default:
            return state
    }
}

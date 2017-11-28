import { TOGGLE_VIEWER } from "../../actiontypes/slideshow"

export const viewer = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_VIEWER:
            return !state
        default:
            return state
    }
}

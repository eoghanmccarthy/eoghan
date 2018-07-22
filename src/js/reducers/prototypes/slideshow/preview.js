import { TOGGLE_PREVIEW } from "../../../types/slideshow"

export const preview = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_PREVIEW:
            return !state
        default:
            return state
    }
}

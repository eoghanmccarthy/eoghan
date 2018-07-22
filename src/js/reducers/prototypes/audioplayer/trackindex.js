import {
    CURRENT_INDEX_INCREMENT,
    CURRENT_INDEX_DECREMENT,
    CURRENT_INDEX_SET
} from "../../../types/audioplayer"

export const trackIndex = (state = 0, action) => {
    switch (action.type) {
        case CURRENT_INDEX_INCREMENT:
            if (state > action.length - 2) {
                return (state = 0)
            } else {
                return state + 1
            }
        case CURRENT_INDEX_DECREMENT:
            if (state < 1) {
                return action.length - 1
            } else {
                return state - 1
            }
        case CURRENT_INDEX_SET:
            return action.index
        default:
            return state
    }
}

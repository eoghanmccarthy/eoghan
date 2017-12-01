import { LOAD_MEDIA } from "../../../actiontypes/audioplayer"

export const tracklist = (state = [], action) => {
    switch (action.type) {
        case LOAD_MEDIA:
            return action.items
        default:
            return state
    }
}

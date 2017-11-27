import {
    ADD_PLAYLIST_ITEM,
    REMOVE_PLAYLIST_ITEM,
    CLEAR_PLAYLIST
} from "../../actiontypes/slideshow"

export const playlistReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_PLAYLIST_ITEM:
            let alreadyExists = state.findIndex(o => o.src === action.src) > -1
            let addPlaylistItemNewState = state.slice()
            if (alreadyExists) {
                return addPlaylistItemNewState
            } else {
                return [
                    ...addPlaylistItemNewState,
                    {
                        src: action.src
                    }
                ]
            }
            return [...state, addPlaylistItemNewState]
        case REMOVE_PLAYLIST_ITEM:
            return state.filter(({ src }) => src !== action.src)
        case CLEAR_PLAYLIST:
            return []
        default:
            return state
    }
}

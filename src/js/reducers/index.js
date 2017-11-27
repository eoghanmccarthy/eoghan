import { combineReducers } from "redux"
import { globalReducer } from "./global"
import { logoReducer } from "./logo"
import { tracklistReducer } from "./audioplayer/tracklist"
import { trackIndexReducer } from "./audioplayer/trackindex"
import { libraryReducer } from "./slideshow/library"
import { playlistReducer } from "./slideshow/playlist"
import { previewReducer } from "./slideshow/preview"
import { viewerReducer } from "./slideshow/viewer"

const rootReducer = combineReducers({
    global: globalReducer,
    logo: logoReducer,
    prototypes: combineReducers({
        audioplayer: combineReducers({
            tracklist: tracklistReducer,
            trackIndex: trackIndexReducer
        }),
        slideshow: combineReducers({
            library: libraryReducer,
            playlist: playlistReducer,
            preview: previewReducer,
            viewer: viewerReducer
        })
    })
})

export default rootReducer

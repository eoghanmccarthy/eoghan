import { combineReducers } from "redux"
import { globalReducer } from "./global/index"
import { notebookReducer } from "./notebook/index"
import { audioPlayerReducer } from "./prototypes/audioplayer/index"
import { slideshowReducer } from "./prototypes/slideshow/index"

const rootReducer = combineReducers({
    global: globalReducer,
    notebook: notebookReducer,
    prototypes: combineReducers({
        audioplayer: audioPlayerReducer,
        slideshow: slideshowReducer
    })
})

export default rootReducer

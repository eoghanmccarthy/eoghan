import { combineReducers } from "redux"
import { globalHeader } from "./global"
import { notebookReducer } from "./notebook/index"
import { audioPlayerReducer } from "./audioplayer/index"
import { slideshowReducer } from "./slideshow/index"

const rootReducer = combineReducers({
    globalHeader,
    notebook: notebookReducer,
    prototypes: combineReducers({
        audioplayer: audioPlayerReducer,
        slideshow: slideshowReducer
    })
})

export default rootReducer

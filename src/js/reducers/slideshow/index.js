import { combineReducers } from "redux"
import { library } from "./library"
import { playlist } from "./playlist"
import { preview } from "./preview"
import { viewer } from "./viewer"

export const slideshowReducer = combineReducers({
    library,
    playlist,
    preview,
    viewer
})

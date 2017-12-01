import { combineReducers } from "redux"
import { tracklist } from "./tracklist"
import { trackIndex } from "./trackindex"

export const audioPlayerReducer = combineReducers({
    tracklist,
    trackIndex
})

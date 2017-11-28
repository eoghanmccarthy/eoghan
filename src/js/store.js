import { createStore } from "redux"
import rootReducer from "./reducers/index"
import throttle from "lodash.throttle"

// Local storage
import { loadState, saveState } from "./localStorage"
const persistedState = loadState()

const store = createStore(
    rootReducer,
    persistedState,
    window.devToolsExtension && devToolsExtension()
)

store.subscribe(
    throttle(() => {
        saveState({
            prototypes: {
                slideshow: {
                    library: store.getState().prototypes.slideshow.library,
                    playlist: store.getState().prototypes.slideshow.playlist
                }
            }
        })
    }, 1000)
)

export default store

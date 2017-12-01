import {
    LOAD_LIBRARY,
    ADD_LIBRARY_ITEM,
    DELETE_LIBRARY_ITEM,
    STATUS_SELECTED_ITEM,
    STATUS_UNSELECTED_ITEM,
    STATUS_UNSELECTED_ALL
} from "../../../actiontypes/slideshow"

export const library = (state = [], action) => {
    switch (action.type) {
        case LOAD_LIBRARY:
            return action.items
        case ADD_LIBRARY_ITEM:
            let alreadyExists = state.findIndex(o => o.src === action.src) > -1
            let addLibItemNewState = state.slice()
            if (alreadyExists) {
                return addLibItemNewState
            } else {
                return [
                    ...addLibItemNewState,
                    {
                        src: action.src,
                        selected: false
                    }
                ]
            }
            return [...state, addLibItemNewState]
        case DELETE_LIBRARY_ITEM:
            return state.filter(({ src }) => src !== action.src)
        case STATUS_SELECTED_ITEM:
            let selectedItemNewState = state.map(item => {
                if (item.src === action.src) {
                    return {
                        ...item,
                        selected: true
                    }
                }
                return item
            })
            return selectedItemNewState
        case STATUS_UNSELECTED_ITEM:
            let unselectedItemNewState = state.map(item => {
                if (item.src === action.src) {
                    return {
                        ...item,
                        selected: false
                    }
                }
                return item
            })
            return unselectedItemNewState
        case STATUS_UNSELECTED_ALL:
            let unselectedAllNewState = state.map(item => {
                return {
                    ...item,
                    selected: false
                }
                return item
            })
            return unselectedAllNewState
        default:
            return state
    }
}

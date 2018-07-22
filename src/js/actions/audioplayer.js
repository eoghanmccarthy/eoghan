import {
    LOAD_MEDIA,
    CURRENT_INDEX_INCREMENT,
    CURRENT_INDEX_DECREMENT,
    CURRENT_INDEX_SET
} from "../types/audioplayer"

export const loadMedia = data => {
    return {
        type: LOAD_MEDIA,
        items: data.map(child => child)
    }
}

export const currentIndexIncrement = length => {
    return {
        type: CURRENT_INDEX_INCREMENT,
        length
    }
}

export const currentIndexDecrement = length => {
    return {
        type: CURRENT_INDEX_DECREMENT,
        length
    }
}

export const currentIndexSet = index => {
    return {
        type: CURRENT_INDEX_SET,
        index
    }
}

import {
    LOAD_LIBRARY,
    ADD_LIBRARY_ITEM,
    DELETE_LIBRARY_ITEM,
    STATUS_SELECTED_ITEM,
    STATUS_UNSELECTED_ITEM,
    STATUS_UNSELECTED_ALL,
    ADD_PLAYLIST_ITEM,
    REMOVE_PLAYLIST_ITEM,
    CLEAR_PLAYLIST,
    TOGGLE_PREVIEW,
    TOGGLE_VIEWER
} from "../actiontypes/slideshow";

export const loadLibrary = json => {
    return {
        type: LOAD_LIBRARY,
        items: json.map(child => child)
    };
};

export const addLibraryItem = src => {
    return {
        type: ADD_LIBRARY_ITEM,
        src
    };
};

export const deleteLibraryItem = src => {
    return {
        type: DELETE_LIBRARY_ITEM,
        src
    };
};

export const setItemStatusSelected = src => {
    return {
        type: STATUS_SELECTED_ITEM,
        src
    };
};

export const setItemStatusUnselected = src => {
    return {
        type: STATUS_UNSELECTED_ITEM,
        src
    };
};

export const setAllStatusUnselected = () => {
    return {
        type: STATUS_UNSELECTED_ALL
    };
};

export const addPlaylistItem = src => {
    return {
        type: ADD_PLAYLIST_ITEM,
        src
    };
};

export const removePlaylistItem = src => {
    return {
        type: REMOVE_PLAYLIST_ITEM,
        src
    };
};

export const clearPlaylist = () => {
    return {
        type: CLEAR_PLAYLIST
    };
};

export const togglePreview = () => {
    return {
        type: TOGGLE_PREVIEW
    };
};

export const toggleViewer = () => {
    return {
        type: TOGGLE_VIEWER
    };
};

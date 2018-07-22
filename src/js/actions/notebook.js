import { TOGGLE_TRANSITION_ON_MOUNT } from "../types/notebook"

export const toggleTransitionOnMount = () => {
    return {
        type: TOGGLE_TRANSITION_ON_MOUNT
    }
}

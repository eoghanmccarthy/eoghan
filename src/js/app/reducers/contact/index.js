import { TOGGLE_CONTACT_VISIBILITY } from "types/contact";

const initialState = {
  isVisible: false
};

const contact = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CONTACT_VISIBILITY:
      return {
        ...state,
        isVisible: !state.isVisible
      };

    default:
      return state;
  }
};

export default contact;

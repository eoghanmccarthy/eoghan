import {
	TOGGLE_LOGO
} from '../actiontypes/index';

export default function logoReducer(state = false, action) {
  switch (action.type) {
    case TOGGLE_LOGO:
      return !state
    default:
      return state;
  }
}

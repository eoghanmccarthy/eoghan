import { LOAD_SKILLS, ADD_SKILL, DELETE_SKILL } from "types/skills";

const initialState = {
  data: ["react", "redux", "redux-observable", "rx-js", "redux-persist"]
};

const skills = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SKILLS:
      return {
        ...state,
        data: action.data
      };
    case ADD_SKILL:
      let addSkill = state.data.includes(action.skill)
        ? state.data
        : [...state.data, action.skill];
      return {
        ...state,
        data: addSkill
      };
    case DELETE_SKILL:
      let deleteSkill = state.data.filter(j => j !== action.skill);
      return {
        ...state,
        data: deleteSkill
      };
    default:
      return state;
  }
};

export default skills;

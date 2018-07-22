import { LOAD_SKILLS, ADD_SKILL, DELETE_SKILL } from "types/skills";

export const loadSkills = data => {
  return {
    type: LOAD_SKILLS,
    data
  };
};

export const addSkill = skill => {
  return {
    type: ADD_SKILL,
    skill
  };
};

export const deleteSkill = skill => {
  return {
    type: DELETE_SKILL,
    skill
  };
};

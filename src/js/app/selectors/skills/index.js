import { createSelector } from "reselect";

const selectSkills = state => state.skills;

const selectSkillsData = createSelector([selectSkills], skills => skills.data);

export { selectSkillsData };

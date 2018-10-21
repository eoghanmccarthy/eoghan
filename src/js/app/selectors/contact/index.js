import { createSelector } from "reselect";

const selectContact = state => state.contact;

const selectContactIsVisible = createSelector(
  [selectContact],
  contact => contact.isVisible
);

export { selectContactIsVisible };

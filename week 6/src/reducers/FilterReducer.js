import {
 SHOW_ALL,
 SET_VISIBILITY_FILTER
} from "../actions/actionsTypes";
const visibilityFilter = (state = SHOW_ALL, Action) => {
 switch (Action.type) {
 case SET_VISIBILITY_FILTER:
 return Action.filter;
 default:
 return state;
 }
};
export default visibilityFilter;
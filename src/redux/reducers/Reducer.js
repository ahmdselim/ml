import {
  GET_USERS,
  ADD_PROJECT,
  GET_PROJECTS,
  GET_CATEGORIES,
} from "../actions/types";
const initState = [];
export function Reducer(state = initState, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case ADD_PROJECT:
      return { ...state };
    case GET_PROJECTS:
      return { ...state, projects: action.payload };
    case GET_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}

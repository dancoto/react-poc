import { PeopleActions, PeopleActionTypes } from './actions';
import { Person } from './person.model';

export interface PeopleState {
  readonly people: Person[];
  readonly loading: boolean;
}

const initialState: PeopleState = {
  people: [],
  loading: false,
};

export function peopleReducer(state = initialState, action: PeopleActions) {
  switch (action.type) {
    case PeopleActionTypes.PEOPLE_LOADED: {
      return {
        ...state,
        people: action.payload,
        loading: false,
      };
    }
    case PeopleActionTypes.LOADING_PEOPLE: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
}

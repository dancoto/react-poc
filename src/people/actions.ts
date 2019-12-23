import axios from 'axios';
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Person } from './person.model';

export enum PeopleActionTypes {
  LOADING_PEOPLE = 'LOADING_PEOPLE',
  PEOPLE_LOADED = 'PEOPLE_LOADED',
}

export interface LoadingPeopleAction {
  readonly type: PeopleActionTypes.LOADING_PEOPLE;
}

export interface PeopleLoadedAction {
  readonly type: PeopleActionTypes.PEOPLE_LOADED;
  payload: Person[];
}

function loadingPeople() {
  return { type: PeopleActionTypes.LOADING_PEOPLE } as LoadingPeopleAction;
}

function peopleLoaded(payload: Person[]) {
  return {
    payload,
    type: PeopleActionTypes.PEOPLE_LOADED,
  } as PeopleLoadedAction;
}
export type PeopleActions = LoadingPeopleAction | PeopleLoadedAction;

// Thunk actions

export const getPeople: ActionCreator<ThunkAction<
  Promise<PeopleLoadedAction>, // The type of the last action to be dispatched - will always be promise<T> for async actions
  Person[], // The type for the data within the last action
  null, // The type of the parameter for the nested function
  PeopleLoadedAction // The type of the last action to be dispatched
>> = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingPeople());
    const response = await axios.get('https://swapi.co/api/people/');
    return dispatch(peopleLoaded(response.data.results));
  };
};

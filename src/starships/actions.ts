import axios from 'axios';
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Starship } from './starship.model';

export enum StarshipsActionTypes {
  LOADING_STARSHIPS = 'LOADING_STARSHIPS',
  STARSHIPS_LOADED = 'STARSHIPS_LOADED',
}

export interface LoadingStarshipsAction {
  readonly type: StarshipsActionTypes.LOADING_STARSHIPS;
}

export interface StarshipsLoadedAction {
  readonly type: StarshipsActionTypes.STARSHIPS_LOADED;
  payload: Starship[];
}

function loadingStarships() {
  return {
    type: StarshipsActionTypes.LOADING_STARSHIPS,
  } as LoadingStarshipsAction;
}

function StarshipsLoaded(payload: Starship[]) {
  return {
    payload,
    type: StarshipsActionTypes.STARSHIPS_LOADED,
  } as StarshipsLoadedAction;
}
export type StarshipsActions = LoadingStarshipsAction | StarshipsLoadedAction;

// Thunk actions

export const getStarships: ActionCreator<ThunkAction<
  Promise<StarshipsLoadedAction>, // The type of the last action to be dispatched - will always be promise<T> for async actions
  Starship[], // The type for the data within the last action
  null, // The type of the parameter for the nested function
  StarshipsLoadedAction // The type of the last action to be dispatched
>> = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingStarships());
    const response = await axios.get('https://swapi.co/api/starships/');
    return dispatch(StarshipsLoaded(response.data.results));
  };
};

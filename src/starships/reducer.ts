import { StarshipsActions, StarshipsActionTypes } from './actions';
import { Starship } from './starship.model';

export interface StarshipsState {
  readonly starships: Starship[];
  readonly loading: boolean;
}

const initialState: StarshipsState = {
  starships: [],
  loading: false,
};

export function starshipsReducer(
  state = initialState,
  action: StarshipsActions
) {
  switch (action.type) {
    case StarshipsActionTypes.STARSHIPS_LOADED: {
      return {
        ...state,
        starships: action.payload,
        loading: false,
      };
    }
    case StarshipsActionTypes.LOADING_STARSHIPS: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
}

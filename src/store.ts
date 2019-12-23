import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
// Import reducers and state type for each section
import { peopleReducer, PeopleState } from './people/reducer';
import { starshipsReducer, StarshipsState } from './starships/reducer';

// Create an interface for the application state
export interface AppState {
  people: PeopleState;
  starships: StarshipsState;
}

// Create the root reducer
const rootReducer = combineReducers<AppState>({
  people: peopleReducer,
  starships: starshipsReducer,
});

export default function configureStore(): Store<AppState, any> {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
}

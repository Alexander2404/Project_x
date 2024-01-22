import { combineReducers, createStore, applyMiddleware } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

import { cardsReducer } from './reducers/cardsReducers';
import { filtersReducer } from './reducers/filtersReducer';
export type RootState = ReturnType<typeof rootReducer>;

const rootReducer: any = combineReducers({
  cards: cardsReducer,
  filters: filtersReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

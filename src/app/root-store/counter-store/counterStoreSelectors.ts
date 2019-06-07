import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { featureAdapter, State } from './counterStoreState';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectCounterState: MemoizedSelector<
  object,
  State
  > = createFeatureSelector<State>('counter');



export const selectCounterError: MemoizedSelector<object, any> = createSelector(
  selectCounterState,
  getError
);

export const selectCounterIsLoading: MemoizedSelector<
  object,
  boolean
  > = createSelector(selectCounterState, getIsLoading);

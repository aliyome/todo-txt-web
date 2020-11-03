import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  State,
  TODO_FEATURE_KEY,
  todoAdapter,
  TodoPartialState,
} from './todo.reducer';

// Lookup the 'Todo' feature state managed by NgRx
export const getTodoState = createFeatureSelector<TodoPartialState, State>(
  TODO_FEATURE_KEY
);

const { selectAll, selectEntities } = todoAdapter.getSelectors();

export const getTodoLoaded = createSelector(
  getTodoState,
  (state: State) => state.loaded
);

export const getTodoError = createSelector(
  getTodoState,
  (state: State) => state.error
);

export const getAllTodo = createSelector(getTodoState, (state: State) =>
  selectAll(state)
);

export const getTodoEntities = createSelector(getTodoState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getTodoState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getTodoEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

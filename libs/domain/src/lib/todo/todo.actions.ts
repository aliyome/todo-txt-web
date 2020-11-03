import { createAction, props } from '@ngrx/store';

import { TodoEntity } from './todo.models';

export const loadTodo = createAction('[Todo] Load Todo');

export const loadTodoSuccess = createAction(
  '[Todo] Load Todo Success',
  props<{ todo: TodoEntity[] }>()
);

export const loadTodoFailure = createAction(
  '[Todo] Load Todo Failure',
  props<{ error: any }>()
);

export const upsertTodo = createAction(
  '[Todo] Upsert Todo',
  props<{ todo: TodoEntity }>()
);

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as TodoActions from './todo.actions';

@Injectable()
export class TodoEffects {
  loadTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodo),
      fetch({
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return TodoActions.loadTodoSuccess({ todo: [] });
        },

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onError: (action, error) => {
          console.error('Error', error);
          return TodoActions.loadTodoFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}

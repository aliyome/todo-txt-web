import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';

import * as fromTodo from './todo.reducer';
import * as TodoSelectors from './todo.selectors';

@Injectable()
export class TodoFacade {
  loaded$ = this.store.pipe(select(TodoSelectors.getTodoLoaded));
  allTodo$ = this.store.pipe(select(TodoSelectors.getAllTodo));
  selectedTodo$ = this.store.pipe(select(TodoSelectors.getSelected));

  constructor(private store: Store<fromTodo.TodoPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { DataPersistence, NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as TodoActions from './todo.actions';
import { TodoEffects } from './todo.effects';

describe('TodoEffects', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let actions: Observable<any>;
  let effects: TodoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        TodoEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(TodoEffects);
  });

  describe('loadTodo$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: TodoActions.loadTodo() });

      const expected = hot('-a-|', {
        a: TodoActions.loadTodoSuccess({ todo: [] }),
      });

      expect(effects.loadTodo$).toBeObservable(expected);
    });
  });
});

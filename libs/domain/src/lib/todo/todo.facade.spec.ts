import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as TodoActions from './todo.actions';
import { TodoEffects } from './todo.effects';
import { TodoFacade } from './todo.facade';
import { TodoEntity } from './todo.models';
import { reducer, State, TODO_FEATURE_KEY } from './todo.reducer';

interface TestSchema {
  todo: State;
}

describe('TodoFacade', () => {
  let facade: TodoFacade;
  let store: Store<TestSchema>;
  const createTodoEntity = (id: string, text = '') =>
    ({
      id,
      text: text || `text-${id}`,
    } as TodoEntity);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(TODO_FEATURE_KEY, reducer),
          EffectsModule.forFeature([TodoEffects]),
        ],
        providers: [TodoFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      store = TestBed.get(Store);
      facade = TestBed.get(TodoFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allTodo$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(TodoActions.loadTodo());

        list = await readFirst(facade.allTodo$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadTodoSuccess` to manually update list
     */
    it('allTodo$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allTodo$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          TodoActions.loadTodoSuccess({
            todo: [createTodoEntity('AAA'), createTodoEntity('BBB')],
          })
        );

        list = await readFirst(facade.allTodo$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});

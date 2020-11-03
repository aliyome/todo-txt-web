import * as TodoActions from './todo.actions';
import { TodoEntity } from './todo.models';
import { initialState, reducer, State } from './todo.reducer';

describe('Todo Reducer', () => {
  const createTodoEntity = (id: string, text = '') =>
    ({
      id,
      text: text || `text-${id}`,
    } as TodoEntity);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  beforeEach(() => {});

  describe('valid Todo actions', () => {
    it('loadTodoSuccess should return set the list of known Todo', () => {
      const todo = [
        createTodoEntity('PRODUCT-AAA'),
        createTodoEntity('PRODUCT-zzz'),
      ];
      const action = TodoActions.loadTodoSuccess({ todo });
      const result: State = reducer(initialState, action);
      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });

    it('upsertTodo should return Todo list with new todo', () => {
      const todo = createTodoEntity('test-todo-1', 'hoge');
      const action = TodoActions.upsertTodo({ todo });
      const result: State = reducer(initialState, action);
      expect(result.entities['test-todo-1']).toBeTruthy();
    });

    it('upsertTodo should return Todo list with updated todo', () => {
      const initial: State = {
        ...initialState,
        entities: { 'test-todo-1': createTodoEntity('test-todo-1', 'initial') },
        ids: ['test-todo-1'],
      };
      const todo = createTodoEntity('test-todo-1', 'updated');
      const action = TodoActions.upsertTodo({ todo });
      const result: State = reducer(initial, action);
      expect(result.entities['test-todo-1'].text).toBe(todo.text);
    });
    it('removeTodo should return Todo list after remove todo', () => {
      const initial: State = {
        ...initialState,
        entities: { 'test-todo-1': createTodoEntity('test-todo-1', 'initial') },
        ids: ['test-todo-1'],
      };
      const action = TodoActions.removeTodo({ id: 'test-todo-1' });
      const result: State = reducer(initial, action);
      expect(result.ids.length).toBe(0);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

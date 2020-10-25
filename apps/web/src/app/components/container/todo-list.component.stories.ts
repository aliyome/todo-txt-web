import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonComponent } from '@presentation/button.component';
import { TodoListRepositoryComponent } from '@presentation/todo-list-repository.component';
import { TodoListRowComponent } from '@presentation/todo-list-row.component';
import { TodoListComponent } from './todo-list.component';

export default {
  title: 'Container/TodoListComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [RouterTestingModule.withRoutes([]), ReactiveFormsModule],
    declarations: [
      TodoListRowComponent,
      TodoListRepositoryComponent,
      ButtonComponent,
    ],
  },
  component: TodoListComponent,
  props: {},
});

import { RouterTestingModule } from '@angular/router/testing';
import { object, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/angular';

import { TodoListRowComponent } from './todo-list-row.component';

export default {
  title: 'Presentation/TodoListRowComponent',
  decorators: [withKnobs],
} as Meta;

export const primary = () => ({
  moduleMetadata: {
    imports: [RouterTestingModule.withRoutes([])],
  },
  component: TodoListRowComponent,
  props: {
    item: object('item', { text: 'text' }),
  },
});

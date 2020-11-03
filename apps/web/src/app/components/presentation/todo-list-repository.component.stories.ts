import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { action, withActions } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/angular';

import { ButtonComponent } from './button.component';
import { TodoListRepositoryComponent } from './todo-list-repository.component';

export default {
  title: 'Presentation/TodoListRepositoryComponent',
  decorators: [withActions, withKnobs],
} as Meta;

export const primary = () => ({
  moduleMetadata: {
    imports: [RouterTestingModule.withRoutes([]), ReactiveFormsModule],
    declarations: [ButtonComponent],
  },
  component: TodoListRepositoryComponent,
  props: {
    repositoryUrl: text(
      'repositoryUrl',
      'https://github.com/aliyome/todo-txt-web'
    ),
    submit: action('submit'),
  },
});

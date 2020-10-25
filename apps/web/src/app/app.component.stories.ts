import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

export default {
  title: 'AppComponent',
};

export const primary = () => ({
  moduleMetadata: {
    schemas: [NO_ERRORS_SCHEMA],
    imports: [RouterTestingModule.withRoutes([])],
  },
  component: AppComponent,
  props: {},
});

import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from '@presentation/header.component';

export default {
  title: 'Presentation/HeaderComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [RouterTestingModule.withRoutes([])],
  },
  component: HeaderComponent,
  props: {},
});

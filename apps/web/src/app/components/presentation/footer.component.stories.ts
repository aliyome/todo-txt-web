import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from '@presentation/footer.component';

export default {
  title: 'Presentation/FooterComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [RouterTestingModule.withRoutes([])],
  },
  component: FooterComponent,
  props: {},
});

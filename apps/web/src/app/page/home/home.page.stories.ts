import { RouterTestingModule } from '@angular/router/testing';
import { FooterComponent } from '@presentation/footer.component';
import { HeaderComponent } from '@presentation/header.component';

import { HomePage } from './home.page';

export default {
  title: 'Page/HomePage',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [RouterTestingModule.withRoutes([])],
    declarations: [HeaderComponent, FooterComponent],
  },
  component: HomePage,
  props: {},
});

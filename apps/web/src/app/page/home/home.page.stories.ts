import { HomePage } from './home.page';

export default {
  title: 'HomeComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: HomePage,
  props: {},
});

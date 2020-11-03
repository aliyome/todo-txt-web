import { text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/angular';

import { ButtonComponent } from './button.component';

export default {
  title: 'Presentation/Button',
  decorators: [withKnobs],
} as Meta;

export const primary = () => ({
  moduleMetadata: {},
  component: ButtonComponent,
  props: {
    text: text('text', 'Normalボタン牡丹'),
  },
});

import { addDecorator, configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
// import centered from './decorator-center';

addDecorator(withKnobs);

setOptions({
  name: 'Components library',
  // url: 'https://necolas.github.io/react-native-web',
  addonPanelInRight: true,
});

// automatically import all files ending in *.stories.tsx
configure(require.context('../src', true, /\.stories\.tsx$/), module);

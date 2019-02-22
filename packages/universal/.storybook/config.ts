import { setOptions } from '@storybook/addon-options';
import { addDecorator, configure } from '@storybook/react';
import centered from './decorator-center';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src/components', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}

addDecorator(centered);

setOptions({
  name: 'React Native Web',
  url: 'https://necolas.github.io/react-native-web',
  goFullScreen: false,
  addonPanelInRight: false,
  showSearchBox: false,
  showAddonPanel: false,
  showStoriesPanel: true
});

configure(loadStories, module);

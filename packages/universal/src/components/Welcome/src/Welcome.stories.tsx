import React from 'react';
import Welcome from './Welcome';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => <Welcome />;

ToStorybook.story = {
  name: 'to Storybook',
};

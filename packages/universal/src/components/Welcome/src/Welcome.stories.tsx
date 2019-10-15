import React from 'react';
import Welcome from './Welcome';

export default {
  title: 'Welcome',
};

export const toStorybook = () => <Welcome />;

toStorybook.story = {
  name: 'to Storybook',
};

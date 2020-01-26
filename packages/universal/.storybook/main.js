module.exports = {
  stories: ['../src/**/*.stories.(ts|tsx)'],
  addons: [
    // '@storybook/addon-a11y/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-backgrounds/register',
    // '@storybook/addon-jest/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-links/register',
    '@storybook/addon-options/register',
    // '@storybook/addon-storysource/register',
    // '@storybook/addon-viewport/register',
    {
      name: '@storybook/addon-docs/register',
      options: { configureJSX: true },
    },
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });
    config.resolve.alias = {
      'react-native': 'react-native-web',
    };
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};

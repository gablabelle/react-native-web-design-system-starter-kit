module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
      // {
      //   loader: require.resolve('@storybook/addon-storysource/loader'),
      //   options: {
      //     parser: 'typescript',
      //   },
      // },
    ],
  });
  config.resolve.alias = {
    'react-native': 'react-native-web',
  };
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};

module.exports = function configure(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: '.',
          alias: {
            '@components': './src/components',
            '@core': './src/core',
            '@screens': './src/screens',
            '@styles': './src/styles',
          },
        },
      ],
    ],
  };
};

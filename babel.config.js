module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@utils': './src/utils',
          '@screens': './src/screens',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@store': './src/store',
          '@models': './src/models',
          '@services': './src/services',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'], //removing consoles.log from app during release (production) versions
    },
  },
};

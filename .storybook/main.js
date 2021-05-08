const path = require('path');

module.exports = {
  stories: [
    // Paths to the story files
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
    '../stories/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  webpackFinal: async config => {
    config.resolve.modules.push(path.resolve(__dirname, '../'));
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    });

    return config;
  }
};

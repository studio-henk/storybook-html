module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',
    'storybook-dark-mode',
    'storybook-addon-designs',
    //'storybook-jira-addon',
    'storybook-design-token',
    '@geometricpanda/storybook-addon-badges'
  ],
  "framework": "@storybook/html",
  staticDirs: ['../public'],
}
module.exports = {
    core: {
        builder: 'webpack5',
    },
    stories: [
        '../stories/**/*.stories.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-a11y',
        'storybook-addon-grid',
        'storybook-addon-grid/chromatic',
        // 'storybook-dark-mode',
        'storybook-addon-designs',
        //'storybook-jira-addon',
        {name: 'storybook-design-token', options: {preserveCSSVars: true}},
        '@geometricpanda/storybook-addon-badges',
    ],
    framework: '@storybook/html',
    staticDirs: ['../public'],
    docs: {
        autodocs: true
    },
    features: {
        interactionsDebugger: true,
        postcss: false,
    },
};
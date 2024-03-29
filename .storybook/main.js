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
        {
            name: 'storybook-design-token',
            options: {
                preserveCSSVars: true
            }
        },
        {
            name: 'storybook-addon-designs',
            options: {
                // renderTarget: "tab",
            },
        },
        '@geometricpanda/storybook-addon-badges',
        '@whitespace/storybook-addon-html',
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
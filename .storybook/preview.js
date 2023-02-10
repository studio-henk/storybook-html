// import {themes} from '@storybook/theming';
import '../styles/toolkit.css'
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        expanded: true,
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: {
            order: [
                'Intro',
                'Getting-Started',
                'ToDo',
                'Done',
                'Design Tokens', ['Intro', 'Color', 'Fontsize', 'Spacings'],
                'Configuration', ['Intro', 'Config'],
                'Base',
                'Components', ['Intro', 'Atoms', ['Intro', 'Base', 'Icon', 'Button', ['Intro', '*'], 'Input Controls', '*'], '*'],
                'Templates Pages', ['Intro']
            ]
        },
    },
    designToken: {
        defaultTab: 'Colors',
        disable: true
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
    /*grid: {
        gridOn: true,
        columns: 12,
        gap: '20px',
        gutter: '50px',
        maxWidth: '1024px',
    },*/
    backgrounds: {
        default: 'transparent',
        values: [
            {
                name: 'transparent',
                value: 'transparent',
            },
            {
                name: 'white',
                value: '#ffffff',
            },
            {
                name: 'black',
                value: '#000000',
            },
            {
                name: 'example-light',
                value: '#cccccc',
            },
            {
                name: 'example-dark',
                value: '#444444',
            },
        ],
        grid: {
            cellSize: 4,
            opacity: 0.25,
            cellAmount: 7,
            offsetX: 0, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
            offsetY: 7, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
        },
    },
    /*layout: 'centered'*/
    /*layout: 'fullscreen'*/
}
// import {themes} from '@storybook/theming';
import '../styles/toolkit.css'
// import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {MINIMAL_VIEWPORTS} from "@storybook/addon-viewport";
import henkTheme from "./henkTheme";

const customViewports = {
  iphonex: {
    name: 'iPhone X',
    styles: {
      height: '812px',
      width: '375px',
    },
    type: 'mobile',
  },
  iphonexr: {
    name: 'iPhone XR',
    styles: {
      height: '896px',
      width: '414px',
    },
    type: 'mobile',
  },
  ipadMini: {
    name: 'iPad Mini',
    styles: {
      height: '1024px',
      width: '768px',
    },
    type: 'tablet',
  },
  ipad12p: {
    name: 'iPad Pro 12.9-in',
    styles: {
      height: '1366px',
      width: '1024px',
    },
    type: 'tablet',
  },
  desktop1280: {
    name: 'Desktop 1280 x 1024',
    styles: {
      height: '1024px',
      width: '1280px',
    },
    type: 'desktop',
  },
  desktop1920: {
    name: 'Desktop - Chromebook 1920 x 1080',
    styles: {
      height: '1080px',
      width: '1920px',
    },
    type: 'desktop',
  },
};

/*export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark', 'henk'],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};*/

export const parameters = {
    docs: {
        /*theme: themes.light,*/
        theme: henkTheme,
    },
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
                'Changelog',
                'Brand', ['Logo', 'Color', 'Typography'],
                'Design Tokens', ['Intro', 'Color', 'Fontsize', 'Spacings'],
                'Configuration', ['Intro', 'Config'],
                'Components', ['Intro', 'Atoms', ['Intro', 'Base', ['H1', 'H2', 'H3', 'Paragraph', 'Small', 'List', '*'], 'Icon', 'Button', ['Intro', '*'], 'Input Controls', '*'], '*'],
                'Templates Pages', ['Intro', 'Pages'],
            ]
        },
    },
    designToken: {
        defaultTab: 'Colors',
        disable: true
    },
    viewport: {
        viewports: {
            ...MINIMAL_VIEWPORTS,
            ...customViewports,
        }
        /*viewports: customViewports,*/
        /*viewports: INITIAL_VIEWPORTS,*/
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
    html: {
        prettier: {
            tabWidth: 4,
            useTabs: false,
            htmlWhitespaceSensitivity: "ignore",
        },
        highlighter: {
            showLineNumbers: true, // default: false
            wrapLines: true, // default: true
        },
    },
    /*layout: 'centered'*/
    /*layout: 'fullscreen'*/
}